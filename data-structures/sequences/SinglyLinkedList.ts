// class CustomStack {
//   private stack: any[];
//   constructor(private maxSize: number, public size: number = 0) {
//     this.stack = [];
//   }

//   push(x: number): void {
//     if (this.size <= this.maxSize) {
//       this.stack.push(x);
//       this.size++;
//     }
//   }

//   pop(): number {
//     if (!this.size) return -1;
//     const top = this.stack.pop();
//     this.size--;
//     return top;
//   }

//   increment(k: number, val: number) {
//     if (k < this.maxSize) {
//       this.stack.forEach((_, i) => (this.stack[i] += val));
//     } else {
//       while (i <= k) {
//         this.stack[i] += val;
//         i++;
//       }
//     }
//   }
// }

// function removeDuplicates(s, k) {
//     const stack=[]
//     const str = s.split('')
//     for(let i=0; i< str.length -1; i++){
//         const n = `${str[i]}`: 1
//         console.log(n)
//     }
// }

// function runningSum(nums: number[]): number[] {
//     let arr : number[] =[]
//     let sum =  0
//      for (let n for nums){
//         sum += n
//         arr.push(sum)
//       }
//       return arr
//  };
// /**
//  * Your CustomStack object will be instantiated and called as such:
//  * var obj = new CustomStack(maxSize)
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * obj.increment(k,val)
//  */

// function maxProfit(prices: number[]): number {
//     // find index of day with smallest price
//     // check to the right of that index for price greater than the smalles you alredy saved
//     const copy = [...prices].sort((a,b)=> a-b)
//     const smallest = copy[0]
//     const hightest = copy[copy.length-1]

//     return highest > smallest ? prices.indexOf(highest) - prices.indexOf(smallest) : 0

// };

export enum FieldName {
  FirstName = 'firstName',
  LastName = 'lastName',
  Country = 'country',
  City = 'city',
  PostalCode = 'zip',
  Zone = 'province',
  Address1 = 'address1',
  Address2 = 'address2',
  Phone = 'phone',
  Company = 'company',
}

export type ZoneKey =
  | 'COUNTY'
  | 'EMIRATE'
  | 'GOVERNORATE'
  | 'PREFECTURE'
  | 'PROVINCE'
  | 'REGION'
  | 'STATE_AND_TERRITORY'
  | 'STATE';

export interface Address {
  company?: string;
  firstName?: string;
  lastName?: string;
  address1: string;
  address2: string;
  city: string;
  province?: string;
  zip: string;
  // Country code ISO 3166-1 alpha-2
  country: string;
  phone?: string;
}

export interface Zone {
  code: string;
  name: string;
}

export interface LoadCountriesResponse {
  data: { countries: Country[] };
  errors?: GraphQlError[];
}

export interface LoadCountryResponse {
  data: { country: Country };
  errors?: GraphQlError[];
}

export interface Country {
  name: string;
  code: string;
  continent: string;
  phoneNumberPrefix: number;
  autocompletionField: string;
  provinceKey: ZoneKey;
  labels: {
    address1: string;
    address2: string;
    city: string;
    company: string;
    country: string;
    firstName: string;
    lastName: string;
    phone: string;
    postalCode: string;
    zone: string;
  };
  optionalLabels: {
    address2: string;
  };
  formatting: {
    edit: string;
    show: string;
  };
  zones: Zone[];
}

export interface ResponseError {
  errors: GraphQlError[];
}

export interface GraphQlError {
  message: string;
  locations?: {
    column: number;
    line: number;
  }[];
  path?: any[];
  extensions?: object;
}

export const GRAPHQL_ENDPOINT =
  'https://country-service.shopifycloud.com/graphql';
export enum GraphqlOperationName {
  Countries = 'countries',
  Country = 'country',
}

export const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const loadCountry: (
  locale: string,
  countryCode: string
) => Promise<Country> = async (
  locale: string,
  countryCode: string
): Promise<Country> => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      query: 'i',
      operationName: GraphqlOperationName.Country,
      variables: {
        countryCode,
        locale: locale.replace(/-/, '_').toUpperCase(),
      },
    }),
  });

  const country: LoadCountryResponse = await response.json();

  if (!('data' in country) && 'errors' in country) {
    throw new CountryLoaderError(country);
  }

  return country.data.country;
};

class CountryLoaderError extends Error {
  constructor(errors: ResponseError) {
    const errorMessage = errors.errors.map((error) => error.message).join('; ');
    super(errorMessage);
  }
}

interface Test {
  data: string[];
  error: string;
}
