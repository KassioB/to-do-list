
function stringToJSON(value: string): unknown | unknown[] {
    return JSON.parse(value);
}

function JSONToString(value: unknown): string{
   return JSON.stringify(value); 
}

export function getLocalStorage(table: string): unknown[] {
   const stringData: string = localStorage.getItem(table) ?? "[]";
   return stringToJSON(stringData) as unknown[];
}

export function setLocalStorage(table: string, data: unknown[]): void 
{
    const stringData: string = JSONToString(data);
    localStorage.setItem(table, stringData);
}