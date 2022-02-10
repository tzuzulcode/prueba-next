import {database} from "../../../database"
import {doc,updateDoc} from 'firebase/firestore'
export default async function saveCart({body,method},res){
    if(method==="POST"){
        const snapshot = await updateDoc(
            doc(
                database,
                "cart",
                body.username
            ),
            body.data
        )
        
        console.log(snapshot)

        res.json({success:true})
    }

}