export interface LoginRequest {
    Client_ID  : string;
    Client_secret : string;
    grant_type  : string;
    username  : string;
    password : string;
    scope : string;
}