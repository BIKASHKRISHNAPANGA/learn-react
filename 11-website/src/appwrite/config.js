
import conf from "../conf/conf";
import { Client, Databases, Storage ,Query, ID} from "appwrite";


export class Service{
    client=new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost()::", error)
            return false
        }
    }

    async getPosts(queries =[Query.equal("status","active")]){
        try {
           return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
           ) 
        } catch (error) {
           console.log("Appwrite srvice :: getPosts::",error) 
        }
    }
    async createPost({title,slug , content , featured ,status ,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content , featured ,status ,userId
                }
            )
        } 
        catch (error) {
            console.log("Appwrite ::error in creatPost()::", error)
            return false
        }
       
    }
    async updatePost(slug,{title, content , featured ,status }){
        try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {title , content , featured ,status }
            
        )  
        } 
        catch (error) {
            console.log("Appwrite error :: updatePost()::",error)
            return false
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                )
                return true  
            } 
            catch (error) {
                console.log("Appwrite error :: deletePost()::",error)
                return false
            }
    }

    // storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite error :: uploadFile()::",error)
                return false
        }
    }
    
    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
            return true
        } catch (error) {
            console.log("Appwrite error :: deleteFile()::",error)
                return false
        }
    }

    FilePreview(fileID){
       return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID).href
    }
}

const service=new Service()
export default service;

