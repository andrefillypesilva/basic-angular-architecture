export class User {
    private _id: number;
    private _name: string;
    private _username: string;
    private _password: string;
    private _token: string;

    constructor(_name: string, _username: string, _password: string) {
        this.name = _name;
        this.username = _username;
        this.password = _password;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }
    
    public set name(_name: string) {
        this._name = _name;
    }

    public get username(): string {
        return this._username;
    }
    
    public set username(_username: string) {
        this._username = _username;
    }

    public get password(): string {
        return this._password;
    }
    
    public set password(_password: string) {
        this._password = _password;
    }

    public get token(): string {
        return this._token;
    }
    
    generateToken(): string {
        // logic to generate token
        this._token = 'generated-token';
        return this._token;
    }
    
}
