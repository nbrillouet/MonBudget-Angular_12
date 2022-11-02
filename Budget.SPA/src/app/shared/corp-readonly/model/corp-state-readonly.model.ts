// import { CorpReadonly } from '../corp-readonly';

// export class CorpStateReadonly<T> extends CorpReadonly<T>{
//     value: T;
//     isStateLoaded: boolean = false;

//     constructor(value: NoParamConstructor<T>){
//         super(value);
//         this.value = new value();
//     }

//     public getValue(property: any): any {
//         let result: any;
//         if(property) {
//             if(typeof property === 'string') {
//                 property.split('.').forEach((x)=>{
//                     result = !result ? this.value[x] : result[x];
//                 });
//             }
//             else {
//             }
//         }

//         return result;
//     }
// }
// type NoParamConstructor<T> = new () => T;
