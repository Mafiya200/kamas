export const updateObjectArray = (items,itemId,objPropName,newObjProps) => {
   
 
   
   let newArray = items.map(function (item) {

        if (item[objPropName] == itemId) {
            let itemCopy = {
                ...item,
                ...newObjProps,

            };
            return itemCopy;

        };
        return item;

    });
    return newArray;
}