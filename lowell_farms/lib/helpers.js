// Link Resolver
function linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === 'page') {
    return `/page/${doc.uid}`;
  }
  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`;
  }

  // Default to homepage
  return '/';
}

function mapStockistsToZip(stockists) {
  return stockists.map(stockist => {
    if (stockist.stockist_address != '') {
      const str = stockist.stockist_address[0].text;
      const fiveDigitNumbers = str.match(/\b\d{5}\b/g);
      // Get last five digit number - the zip code
      const zip =
        fiveDigitNumbers != undefined ? fiveDigitNumbers.slice(-1)[0] : '';

      // console.log(parseInt(zip, 10)); // ["12345", "54321"]
      stockist.zip = zip;
    }

    return stockist;
  });
}

function findClosestDeliveryServices(allDeliveryServices, zipCode) {
  const closestDeliveryServices = [];

  for (let i = 0; i < allDeliveryServices.length; i++) {
    // console.log(allDeliveryServices[i]);
    if (allDeliveryServices[i].delivery_service_zip_codes != '') {
      const deliveryZipCodes =
        allDeliveryServices[i].delivery_service_zip_codes[0].text;

      const isInDeliveryRange = deliveryZipCodes.includes(zipCode);
      // console.log(isInDeliveryRange);

      // console.log(distance);
      if (isInDeliveryRange) {
        closestDeliveryServices.push(allDeliveryServices[i]);
      }
    }
  }

  return closestDeliveryServices;
}

function findClosestRetailers(allRetailers, zipCode, zipcodes) {
  // Find retailers and delivery services closest to zip code
  const closestRetailers = [];

  for (let i = 0; i < allRetailers.length; i++) {
    if (allRetailers[i].zip != undefined) {
      allRetailers[i].distance =
        zipCode != null
          ? zipcodes.distance(zipCode, allRetailers[i].zip)
          : 1001;

      // console.log(distance);
      if (allRetailers[i].distance != null) {
        closestRetailers.push(allRetailers[i]);
      }
    }
  }

  closestRetailers.sort(function(a, b) {
    return a.distance - b.distance;
  });

  return closestRetailers;
}

module.exports = {
  linkResolver,
  mapStockistsToZip,
  findClosestDeliveryServices,
  findClosestRetailers,
};
