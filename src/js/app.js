import { name, email, cell, company, sector, country, zipCode, form, button, spanEmail, spanName, spanCell, spanCompany, spanSector, spanCountry, spanZipCode, regexName, regexEmail, regexCell, regexCompany, regexSector, regexCountry, regexZipCode, regexFindHotmail, regexFindOutlook, hotmailErr, outlookErr, emailErr, nameErr, cellErr, companyErr, sectorErr, countryErr, zipCodeErr, arrayValues } from './variables'

import '../css/styles.scss';


    nameValidation();
    emailValidation();
    cellValidation();
    companyValidation();
    sectorValidation();
    countryValidation();
    zipCodeValidation();

    console.log();

button.addEventListener('submit', (e) => {
    e.preventDefault();
})

function nameValidation(){
    name.addEventListener('input', () => {
        if(regexName.test(name.value)){
            name.style.borderColor = '#008000';
            spanName.innerHTML = '';
            return true;
        }else{
            name.style.borderColor = '#FF0000';
            spanName.innerHTML = nameErr;
            return false;
        }
    });
}
function emailValidation(){
    email.addEventListener('input', () => {
        if(regexEmail.test(email.value)){
            email.style.borderColor = '#008000';
            spanEmail.innerHTML = '';
            return true;
        }else{
            email.style.borderColor = '#FF0000'; 
            if(regexFindHotmail.test(email.value)){
                spanEmail.innerHTML = hotmailErr;
            }else if(regexFindOutlook.test(email.value)){
                spanEmail.innerHTML = outlookErr;
            }else{
                spanEmail.innerHTML = emailErr;
            }
            return false;
        }
    });
}

function cellValidation(){
    cell.addEventListener('input', () => {
        if(regexCell.test(cell.value)){
            cell.style.borderColor = '#008000';
            spanCell.innerHTML = '';
            return true;
        }else{
            cell.style.borderColor = '#FF0000';
            spanCell.innerHTML = cellErr;
            return false;
        }
    })
}

function companyValidation(){
    company.addEventListener('input', () => {
        if(regexCompany.test(company.value)){
            company.style.borderColor = '#008000';
            spanCompany.innerHTML = '';
            showSector(company.value);
        }else{
            company.style.borderColor = '#FF0000';
            spanCompany.innerHTML = companyErr;
            showSector(company.value);
        }
    });
}

function sectorValidation(){
    sector.addEventListener('input', () => {
        if(regexSector.test(sector.value)){
            sector.style.borderColor = '#008000';
            spanSector.innerHTML = '';
        }else{
            sector.style.borderColor = '#FF0000';
            spanSector.innerHTML = sectorErr;
        }
    });
}

function showSector(companyValue){
    if(company.value !== ''){
        const parent = sector.parentElement.parentElement;
        parent.classList.remove('is-hidden');
        parent.children[0].hidden = false;
        sector.type = 'text';
    }else{
        const parent = sector.parentElement.parentElement;
        parent.classList.add('is-hidden');
        parent.children[0].hidden = true;
        sector.type = 'hidden';
    }
}

function countryValidation(){
    country.addEventListener('input', () => {
        if(regexCountry.test(country.value)){
            country.style.borderColor = '#008000';
            spanCountry.innerHTML = '';
            if(country.value !== country.options[0].value){
                zipCode.value = '';
                zipCode.disabled = true;
                zipCode.required = false;
            }else{
                zipCode.disabled = false;
            }
            return true;
        }else{
            country.style.borderColor = '#FF0000';
            spanCountry.innerHTML = countryErr;
            return false;
        }
    });
}

function zipCodeValidation(){
    zipCode.addEventListener('input', () => {
        if(regexZipCode.test(zipCode.value) || zipCode.value === ''){
            zipCode.style.borderColor = '#008000';
            spanZipCode.innerHTML = '';
            return true;
        }else{
            zipCode.style.borderColor = '#FF0000';
            spanZipCode.innerHTML = zipCodeErr;
            return false;
        }
    });
}

