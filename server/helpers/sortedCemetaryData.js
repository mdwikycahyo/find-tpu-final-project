module.exports = function sortedData(cemetarySpaceData){
    return {
        cemetaryName: cemetarySpaceData.cemetaryName,
        cemetaryLocation: cemetarySpaceData.cemetaryLocation,
        width: cemetarySpaceData.width,
        height: cemetarySpaceData.height,
        latitude: cemetarySpaceData.latitude,
        longitude: cemetarySpaceData.longitude,
        image_url: cemetarySpaceData.image_url,
        price: cemetarySpaceData.price,
        keeperName: cemetarySpaceData.keeperName,
        keeperPhone: cemetarySpaceData.keeperPhone,
        facilities: cemetarySpaceData.facilities,
        spaceLeft: cemetarySpaceData.spaceLeft,
        spaceFilled: cemetarySpaceData.spaceFilled,
        cemetarySpaceId: cemetarySpaceData.cemetarySpaceId,
        cemetarySpace: cemetarySpaceData.cemetarySpace,
        _id: cemetarySpaceData._id
    }
}