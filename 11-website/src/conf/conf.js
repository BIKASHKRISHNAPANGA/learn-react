const conf={
    appwriteUrl:String(process.env.REACT_APP_APPWRITE_UR),
    appwriteProjectId:String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(process.env.REACT_APP_APPWRITE_PROJECT_DATABASE_ID),
    appwriteBucketId:String(process.env.REACT_APP_APPWRITE_PROJECT_BUCKET_ID),
    appwriteCollectionId:String(process.env.REACT_APP_APPWRITE_PROJECT_COLLECTION_ID)
}

export default conf