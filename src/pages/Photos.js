import React, { useContext } from "react";
import { context } from "../Context";
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const { photos } = useContext(context);
    return (
        <main className="photos">
            {photos.map((photo, index) => {
                console.log(photo);
                return <Image key={photo.id} photo={photo} className={getClass(index)}/>
            })}
        </main>
    )
}

export default Photos
