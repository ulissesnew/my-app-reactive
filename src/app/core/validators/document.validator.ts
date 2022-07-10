import {AbstractControl} from '@angular/forms';
import { cnpj, cpf } from "cpf-cnpj-validator";


export class DocumentValidator {
    static validarCNPJ(control: AbstractControl): any | null {
        const document = control.value as string;
        if(document.length < 14) return {IsCNPJ: true}
        return cnpj.isValid(document) ? null : {IsCNPJ: true}
    }

    static validarCPF(control: AbstractControl): any | null {
        const document = control.value as string;
        if(document.length < 11) return {IsCPF: true}
        return cpf.isValid(document) ? null : {IsCPF: true}
    }

    static validarCnpjOrCpf(control: AbstractControl): any | null {
        const document = control.value as string;
        if(document.length < 11) return {IsCPForCNPJ: true}
        const valid = cpf.isValid(document) || cnpj.isValid(document);
        return valid ? null : {IsCPForCNPJ: true}
    }
}