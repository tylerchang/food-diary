import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';


const ImageGrid = ({setSelectedImg}) => {
    
    const {docs} = useFirestore('images');
    // console.log(docs);

    return(
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div 
                   className="img-wrap" 
                   key={doc.id}   
                   onClick={() => setSelectedImg(doc.url)}
                   whileHover={{opacity: 1, cursor: 'pointer'}}
                   >
       
                   <motion.img 
                       src={doc.url} alt="Image Expected"
                       initial={{opacity: 0}}
                       animate={{opacity: 1}}
                       transition={{delay: 0.4}}/>
               </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;