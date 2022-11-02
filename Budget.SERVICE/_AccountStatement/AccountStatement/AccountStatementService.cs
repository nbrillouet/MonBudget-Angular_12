using AutoMapper;
using Budget.DATA.Repositories;
using Budget.HELPER;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.GMap;
using Budget.MODEL.Enum;
using Budget.MODEL.Filter;
using Budget.SERVICE.GMap;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Budget.SERVICE
{
    public class AccountStatementService : IAccountStatementService
    {
        private readonly IMapper _mapper;
        //private readonly IPlanService _planService;
        private readonly IOperationTransverseAsService _operationTransverseAsService;
        private readonly ReferentialService _referentialService;

        private readonly IAccountStatementRepository _accountStatementRepository;

        public AccountStatementService(
            IMapper mapper,
            //IGMapAddressService gMapAddressService,
            //IVPlanGlobalService vPlanGlobalService,
            IPlanService planService,
            IOperationTransverseAsService operationTransverseAsService,
            //IOperationDetailService operationDetailService,
            ReferentialService referentialService,

            IAccountStatementRepository accountStatementRepository
            )
        {
            _mapper = mapper;
            //_gMapAddressService = gMapAddressService;
            _accountStatementRepository = accountStatementRepository;
            //_vPlanGlobalService = vPlanGlobalService;
            //_planService = planService;
            _operationTransverseAsService = operationTransverseAsService;
            //_operationDetailService = operationDetailService;
            _referentialService = referentialService;
        }

        public PagedList<AsForTable> GetTable(FilterAsTableSelected filter)
        {
            var pagedList = _accountStatementRepository.GetAsTable(filter);

            var result = new PagedList<AsForTable>(_mapper.Map<List<AsForTable>>(pagedList.Datas), pagedList.Pagination);

            foreach (var data in result.Datas)
            {
                //var toto = _planService.GetForSelectByIdAs(data.Id);
                ////data.Plans = 
                //data.Plans = _planService.GetForSelectByIdAs(data.Id);
            }
            return result;
        }

        public PagedList<AsForTable> GetPlanNotAsTable(FilterPlanNotAsTableGroupSelected filter)
        {
            var pagedList = _accountStatementRepository.GetPlanNotAsTable(filter);
            var result = new PagedList<AsForTable>(_mapper.Map<List<AsForTable>>(pagedList.Datas), pagedList.Pagination);

            return result;
        }

        public int GetPlanNotAsCount(FilterFixedPlanNotAsTableSelected filterFixed)
        {
            return _accountStatementRepository.GetPlanNotAsCount(filterFixed);
        }

        public AsForDetail GetForDetail(int idAs)
        {
            //var userForGroup = _userService.GetForUserGroup(idUser);
            AsForDetail asForDetail = GetById(idAs);
            //operationForDetail.User = userForGroup;

            return asForDetail;
        }

        private AsForDetail GetById(int idAs)
        {
            AccountStatement accountStatement = _accountStatementRepository.GetForDetail(idAs);
            var asForDetail = _mapper.Map<AsForDetail>(accountStatement);

            asForDetail.OperationTransverse = _operationTransverseAsService.GetOperationTransverseSelectList(idAs, EnumSelectType.Empty);

            return asForDetail;
        }

        public List<AsForTable> GetByPlanPosteReferences(List<PlanPosteReference> planPosteReferences,MonthYear monthYear)
        {
            DateTime minDate = monthYear.Month.Id == (int)EnumMonth.BalanceSheetYear 
                ? Convert.ToDateTime($"01/01/{monthYear.Year}")
                : Convert.ToDateTime($"01/{monthYear.Month.Id}/{monthYear.Year}");
            
            DateTime maxDate = monthYear.Month.Id == (int)EnumMonth.BalanceSheetYear
                ? Convert.ToDateTime($"31/12/{monthYear.Year}")
                : DateHelper.GetLastDayOfMonth(minDate);
            
            var accountStatements = _accountStatementRepository.GetByDatePlanPosteReferenceList(planPosteReferences, minDate, maxDate);

            return _mapper.Map<List<AsForTable>>(accountStatements);
        }

        public Boolean Save(List<AccountStatement> accountStatements)
        {

            return _accountStatementRepository.Save(accountStatements);
        }

        public AccountStatement Save(AccountStatement accountStatement)
        {
            return _accountStatementRepository.Save(accountStatement);
        }

        

        public List<InternalTransferDto> GetAsInternalTransfer(FilterAsTableSelected filter)
        {
            List<InternalTransferDto> internalTransferDtos = new List<InternalTransferDto>();

            var date = Convert.ToDateTime($"01/{filter.MonthYear.Month.Id}/{filter.MonthYear.Year}");
            var dateMin = DateHelper.GetFirstDayOfMonth(date);
            var dateMax = DateHelper.GetLastDayOfMonth(date);

            var accountStatements = _accountStatementRepository.GetAsInternalTransfer(filter.User.IdUserGroup,filter.IdAccount, dateMin, dateMax);
            var asDtos = _mapper.Map<List<AsForTable>>(accountStatements);
            foreach(var asDtoFirst in asDtos)
            {
                AsForTable asDtoSecond=null; // = new AsForTableDto();
                AccountStatement asCouple = _accountStatementRepository.GetAsInternalTransferCouple(filter.User.IdUserGroup,asDtoFirst.Id);
                if (asCouple != null)
                {
                    var account = _referentialService.AccountService.GetFullById(asCouple.IdAccount);
                    asCouple.Account = account;
                    asDtoSecond = _mapper.Map<AsForTable>(asCouple);
                }

                InternalTransferDto internalTransferDto = new InternalTransferDto() {
                    AsFirst= asDtoFirst,
                    AsSecond = asDtoSecond
                };
                internalTransferDtos.Add(internalTransferDto);

            }

            return internalTransferDtos;
        }

        public List<AsForTable> GetAsInternalTransferOrphan(int idUserGroup)
        {
            List<AccountStatement> asOrphans = _accountStatementRepository.GetAsInternalTransferOrphan(idUserGroup);

            return _mapper.Map<List<AsForTable>>(asOrphans);
        }

        public List<int> GetYearAvailable(int idUser, int idAccount)
        {
            return _accountStatementRepository.GetYearAvailable(idUser, idAccount);
        }

        public bool Update(AsForDetail asForDetail)
        {
            //chargement du accountStatementFile
            var accountStatement = _accountStatementRepository.GetById(asForDetail.Id);

            //mise à jour des données
            accountStatement.AmountOperation = asForDetail.AmountOperation.Value;
            accountStatement.DateIntegration = asForDetail.DateIntegration.Value.Date;
            accountStatement.LabelAs = asForDetail.LabelAs;
            accountStatement.IdOperation = asForDetail.Operation.Id;
            accountStatement.IdOperationMethod = asForDetail.OperationMethod.Id;
            accountStatement.IdOperationType = asForDetail.OperationType.Id;
            accountStatement.IdOperationTypeFamily = asForDetail.OperationTypeFamily.Id;

            //switch (asForDetail.OperationPlace.Id)
            //{
            //    case 2:
            //        asForDetail.OperationDetail.GMapAddress.Id = 2;
            //        asForDetail.OperationDetail.KeywordPlace = null;
            //        break;
            //    case 3:
            //        asForDetail.OperationDetail.GMapAddress.Id = 3;
            //        asForDetail.OperationDetail.KeywordPlace = "--INTERNET--";
            //        break;
            //    default:
            //        break;
            //}


            //Recherche si operation detail existe déjà, sinon creation
            var idOdUnknown = _referentialService.OperationDetailService.GetUnknown(asForDetail.Asi.User.IdUserGroup).Id;
            OperationDetail operationDetail = new OperationDetail
            {
                Id = asForDetail.OperationDetail.Id == idOdUnknown ? 0 : asForDetail.OperationDetail.Id,
                IdUserGroup = asForDetail.Asi.User.IdUserGroup,
                IdOperation = asForDetail.Operation.Id,
                IdGMapAddress = asForDetail.OperationDetail.GMapAddress.Id,
                KeywordOperation = asForDetail.OperationDetail.KeywordOperation,
                KeywordPlace = asForDetail.OperationDetail.KeywordPlace
            };
            operationDetail = _referentialService.OperationDetailService.GetOrCreate(operationDetail);
            accountStatement.IdOperationDetail = operationDetail.Id;

            //Mise à jour de l'operationTransverse
            if(asForDetail.OperationTransverse!=null)
                _operationTransverseAsService.Update(asForDetail.OperationTransverse, asForDetail.Id);

            //update de accountStatementFile
            _accountStatementRepository.Update(accountStatement);

            return true;

        }

        public AsForTable GetLastAccountStatement(int idAccount)
        {
            var accountStatement = _accountStatementRepository.GetLastAccountStatement(idAccount);
            return _mapper.Map<AsForTable>(accountStatement);// _accountStatementRepository.GetLastAccountStatement(idAccount);
        }

    }
}
