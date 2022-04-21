export class User {
    constructor(
    public login: string,
    public id: number,
    public node_id: string,
    public avatar_url: string,
    public gravatar_id: string,
    public url: string,
    public email: string,
    public hireable: boolean,
    public bio: string,
    public public_repos: number,
    public public_gists: number,
    public followers: number,
    public following: number,
    public created_at: Date,
    public updated_at: Date){}
}
