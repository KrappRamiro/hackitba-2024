export const environment: IEnvironment={
    production: false,
    backendUrl:"http://localhost:8080"
}

interface IEnvironment{
    production:boolean;
    backendUrl:string;
}