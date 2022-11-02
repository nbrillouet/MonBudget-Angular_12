using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public partial class OperationService
    {
        public OperationForDetail SaveDetail(OperationForDetail operationForDetailDto)
        {
            var operation = _mapper.Map<Operation>(operationForDetailDto);
            if (operation.Id != 0)
            {
                _operationRepository.Update(operation);
            }
            else
            {
                operation = _operationRepository.Create(operation);
            }

            return _mapper.Map<OperationForDetail>(operation); ;
        }

        public Select Create(Operation operation)
        {
            Operation o = CheckValues(operation);

            return _mapper.Map<Select>(_operationRepository.Create(operation));
        }

        public void Update(Operation operation)
        {
            _operationRepository.Update(operation);
        }

        public void Delete(Operation operation)
        {
            _operationRepository.Delete(operation);
        }

        public bool Delete(int idOperation)
        {
            var operation = _operationRepository.GetById(idOperation);

            _operationRepository.Delete(operation);

            return true;
        }

        public void DeleteOperations(List<int> idOperationList, int idUserGroup)
        {
            CheckForDeleteOperations(idOperationList);
            foreach (var idOperation in idOperationList)
            {
                Delete(idOperation);
            }
        }

        private Operation CheckValues(Operation operation)
        {
            List<BusinessExceptionMessage> businessExceptionMessages = new List<BusinessExceptionMessage>();
            operation.Label = operation.Label.ToUpper();

            //Check des données
            if (operation == null)
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_REF_OPE_ERR_001));
            }

            if (operation.Label == null)
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_REF_OPE_ERR_002));
            }

            if (_operationRepository.IsDuplicate(operation))
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_REF_OPE_ERR_003));
            }

            if (businessExceptionMessages.Any())
            {
                throw new BusinessException(businessExceptionMessages);
            }

            return operation;
        }

        private void CheckForDeleteOperations(List<int> idOperationList)
        {
            List<BusinessExceptionMessage> businessExceptionMessages = new List<BusinessExceptionMessage>();
            foreach (var idOperation in idOperationList)
            {
                var operation = _operationRepository.GetById(idOperation);
                businessExceptionMessages.AddRange(CheckForDelete(operation));
            }

            if (businessExceptionMessages.Count() > 0)
            {
                throw new BusinessException(businessExceptionMessages);
            }
        }

        private List<BusinessExceptionMessage> CheckForDelete(Operation operation)
        {
            List<BusinessExceptionMessage> businessExceptionMessages = new List<BusinessExceptionMessage>();
            //Recherche si operation est mandatory
            if (operation.IsMandatory)
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OPE_ERR_000));

            //Recherche si operation utilisée dans account statement file
            if (_accountStatementCheckReferentialService.AsifHasOperation(operation.Id))
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OPE_ERR_001));
            }

            //Recherche si operation utilisé dans account statement
            if (_accountStatementCheckReferentialService.AsHasOperation(operation.Id))
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OPE_ERR_002));
            }

            return businessExceptionMessages;
            //if (businessExceptionMessages.Count > 0)
            //{
            //    throw new BusinessException(businessExceptionMessages);
            //}
        }

        
    }
}
