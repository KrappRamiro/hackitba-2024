export const environment: IEnvironment={
    production: false,
    backendUrl:"http://localhost:3000"
}

interface IEnvironment{
    production:boolean;
    backendUrl:string;
}