/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import * as XLSX from 'xlsx';

export const getDateTime = () => {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = '0' + month;
  }
  if (day.toString().length == 1) {
    day = '0' + day;
  }
  if (hour.toString().length == 1) {
    hour = '0' + hour;
  }
  if (minute.toString().length == 1) {
    minute = '0' + minute;
  }
  if (second.toString().length == 1) {
    second = '0' + second;
  }
  var dateTime = year + '-' + month + '-' + day;
  return dateTime;
};

export const agentInitialState = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
  13: null,
  14: null,
  15: null,
  16: null,
  17: null,
  18: null,
  19: null,
  20: null,
  21: null,
  22: null,
};

export const getInitialState = () => {
  return {
    EV5C: {
      quantity: 0,
      category: 'EV5C',
      availableCards: 0,
    },
    EV7C: {
      quantity: 0,
      category: 'EV7C',
      availableCards: 0,
    },
    EV1: {
      quantity: 0,
      category: 'EV1',
      availableCards: 0,
    },
    EV2: {
      quantity: 0,
      category: 'EV2',
      availableCards: 0,
    },
    EV3: {
      quantity: 0,
      category: 'EV3',
      availableCards: 0,
    },
    EV5: {
      quantity: 0,
      category: 'EV5',
      availableCards: 0,
    },
    EVD1: {
      quantity: 0,
      category: 'EVD1',
      availableCards: 0,
    },
    EV6: {
      quantity: 0,
      category: 'EV6',
      availableCards: 0,
    },
    EV10: {
      quantity: 0,
      category: 'EV10',
      availableCards: 0,
    },
    EVD2: {
      quantity: 0,
      category: 'EVD2',
      availableCards: 0,
    },
    EV15: {
      quantity: 0,
      category: 'EV15',
      availableCards: 0,
    },
    EV18: {
      quantity: 0,
      category: 'EV18',
      availableCards: 0,
    },
    EV25: {
      quantity: 0,
      category: 'EV25',
      availableCards: 0,
    },
    EV35: {
      quantity: 0,
      category: 'EV35',
      availableCards: 0,
    },
    EV40: {
      quantity: 0,
      category: 'EV40',
      availableCards: 0,
    },
    EV50: {
      quantity: 0,
      category: 'EV50',
      availableCards: 0,
    },
    EV1H: {
      quantity: 0,
      category: 'EV1H',
      availableCards: 0,
    },
    EB6: {
      quantity: 0,
      category: 'EB6',
      availableCards: 0,
    },
    EB12: {
      quantity: 0,
      category: 'EB12',
      availableCards: 0,
    },
    EB25: {
      quantity: 0,
      category: 'EB25',
      availableCards: 0,
    },
    EB35: {
      quantity: 0,
      category: 'EB35',
      availableCards: 0,
    },
    EB55: {
      quantity: 0,
      category: 'EB55',
      availableCards: 0,
    },
    EVU5: {
      quantity: 0,
      category: 'EVU5',
      availableCards: 0,
    },
  };
};

export const getCategoryTag = (category) => {
  if (category === 'EV7C') {
    return '750IQD';
  } else if (category === 'EV1') {
    return '1000IQD';
  } else if (category === 'EV2') {
    return '2000IQD';
  } else if (category === 'EV3') {
    return '3000IQD';
  } else if (category === 'EV5') {
    return '5000IQD';
  } else if (category === 'EVD1') {
    return '5GB';
  } else if (category === 'EV6') {
    return '6000IQD';
  } else if (category === 'EV10') {
    return '10000IQD';
  } else if (category === 'EVD2') {
    return '10GB';
  } else if (category === 'EV15') {
    return '15000IQD';
  } else if (category === 'EV18') {
    return '18000IQD';
  } else if (category === 'EV25') {
    return '25000IQD';
  } else if (category === 'EV35') {
    return '35000IQD';
  } else if (category === 'EV40') {
    return '40000IQD';
  } else if (category === 'EV50') {
    return '50000IQD';
  } else if (category === 'EV1H') {
    return '100000IQD';
  } else if (category === 'EV5C') {
    return '500IQD';
  } else if (category === 'EV7C') {
    return '750IQD';
  } else if (category === 'EB6') {
    return 'Max6000';
  } else if (category === 'EB12') {
    return 'Max120000';
  } else if (category === 'EB25') {
    return 'Max25000';
  } else if (category === 'EB35') {
    return 'Max35000';
  } else if (category === 'EB55') {
    return 'Max55000';
  } else if (category === 'EVU5') {
    return 'Internet_premium_free50k';
  }
};


export const agentCategories = [
  {
    category: 'EV5C',
    quantity: 0,
    image: '/images/500IQD.jpg',
    categoryTag: '500IQD',
    categoryId: 1,
  },
  {
    category: 'EV7C',
    quantity: 0,
    image: '/images/750IQD.jpg',
    categoryTag: '750IQD',
    categoryId: 2,
  },
  {
    category: 'EV1',
    quantity: 0,
    image: '/images/1000IQD.jpg',
    categoryTag: '1000IQD',
    categoryId: 3,
  },
  {
    category: 'EV2',
    quantity: 0,
    image: '/images/2000IQD.jpg',
    categoryTag: '2000IQD',
    categoryId: 4,
  },
  {
    category: 'EV3',
    quantity: 0,
    image: '/images/3000IQD.jpg',
    categoryTag: '3000IQD',
    categoryId: 5,
  },
  {
    category: 'EV5',
    quantity: 0,
    image: '/images/5000IQD.jpg',
    categoryTag: '5000IQD',
    categoryId: 6,
  },
  {
    category: 'EVD1',
    quantity: 0,
    image: '/images/5GB.jpg',
    categoryTag: '5GB',
    categoryId: 7,
  },
  {
    category: 'EV6',
    quantity: 0,
    image: '/images/6000IQD.jpg',
    categoryTag: '6000IQD',
    categoryId: 8,
  },
  {
    category: 'EV10',
    quantity: 0,
    image: '/images/10000IQD.jpg',
    categoryTag: '10000IQD',
    categoryId: 9,
  },
  {
    category: 'EVD2',
    quantity: 0,
    image: '/images/10GB.jpg',
    categoryTag: '10GB',
    categoryId: 10,
  },
  {
    category: 'EV15',
    quantity: 0,
    image: '/images/15000IQD.jpg',
    categoryTag: '15000IQD',
    categoryId: 11,
  },
  {
    category: 'EV18',
    quantity: 0,
    image: '/images/18000IQD.jpg',
    categoryTag: '18000IQD',
    categoryId: 12,
  },
  {
    category: 'EV25',
    quantity: 0,
    image: '/images/25000IQD.jpg',
    categoryTag: '25000IQD',
    categoryId: 13,
  },
  {
    category: 'EV35',
    quantity: 0,
    image: '/images/35000IQD.jpg',
    categoryTag: '35000IQD',
    categoryId: 14,
  },
  {
    category: 'EV40',
    quantity: 0,
    image: '/images/40000IQD.jpg',
    categoryTag: '40000IQD',
    categoryId: 15,
  },
  {
    category: 'EV50',
    quantity: 0,
    image: '/images/50000IQD.jpg',
    categoryTag: '50000IQD',
    categoryId: 16,
  },
  {
    category: 'EV1H',
    quantity: 0,
    image: '/images/100000IQD.jpg',
    categoryTag: '100000IQD',
    categoryId: 17,
  },
  {
    category: 'EB6',
    quantity: 0,
    image: '/images/Max6000.jpg',
    categoryTag: 'Max6000',
    categoryId: 18,
  },
  {
    category: 'EB12',
    quantity: 0,
    image: '/images/Max12000.jpg',
    categoryTag: 'Max12000',
    categoryId: 19,
  },
  {
    category: 'EB25',
    quantity: 0,
    image: '/images/Max25000.jpg',
    categoryTag: 'Max25000',
    categoryId: 20,
  },
  {
    category: 'EB35',
    quantity: 0,
    image: '/images/Max35000.jpg',
    categoryTag: 'Max35000',
    categoryId: 21,
  },
  {
    category: 'EB55',
    quantity: 0,
    image: '/images/Max55000.jpg',
    categoryTag: 'Max55000',
    categoryId: 22,
  },

  {
    category: 'EVU5',
    quantity: 0,
    image: '/images/Internet_premium_free50k.jpg',
    categoryTag: 'Internet_premium_free50k',
    categoryId: 23,
  },
];



export const adminSectionOptions = [
  'Select All',
  'Admins',
  'Main',
  'Agents',
  'Settings',
  'Notifications',
  'Printing List',
  'Orders',
  'Recovery',
  'Sources',
  'Cancel Sale',
];
export const agentSectionOptions = [
  'Select All',
  'Printing List',
  'Recovery',
  'Reports',
  'PDF-TXT-Sale',
  'Cancel Sale',
  'Agent Sale',
];
export const agentsOptions = [
  'Select All',
  'Centerunified',
  'Alshmokh company',
  'Al-Sultan Company',
];
export const categoriesOptions = [
  'Select All',
  '1000IQD',
  '2000IQD',
  '3000IQD',
  '5000IQD',
  '5GB',
  '6000IQD',
  '10000IQD',
  '10GB',
  '15000IQD',
  '18000IQD',
  '25000IQD',
  '35000IQD',
  '40000IQD',
  '50000IQD',
  '100000IQD',
  '500IQD',
  '750IQD',
  'Max6000',
  'Max120000',
  'Max25000',
  'Max35000',
  'Max55000',
  'Internet_premium_free50k',
];

export const getUpdatedAgentCategories = (quantityObject) => {
  return [
    {
      category: 'EV5C',
      quantity: quantityObject?.hasOwnProperty('EV5C')
        ? quantityObject['EV5C']
        : 0,
      image: '/images/500IQD.jpg',
      categoryTag: '500IQD',
      categoryId: 1,
    },
    {
      category: 'EV7C',
      quantity: quantityObject?.hasOwnProperty('EV7C')
        ? quantityObject['EV7C']
        : 0,
      image: '/images/750IQD.jpg',
      categoryTag: '750IQD',
      categoryId: 2,
    },
    {
      category: 'EV1',
      quantity: quantityObject?.hasOwnProperty('EV1')
        ? quantityObject['EV1']
        : 0,
      image: '/images/1000IQD.jpg',
      categoryTag: '1000IQD',
      categoryId: 3,
    },
    {
      category: 'EV2',
      quantity: quantityObject?.hasOwnProperty('EV2')
        ? quantityObject['EV2']
        : 0,
      image: '/images/2000IQD.jpg',
      categoryTag: '2000IQD',
      categoryId: 4,
    },
    {
      category: 'EV3',
      quantity: quantityObject?.hasOwnProperty('EV3')
        ? quantityObject['EV3']
        : 0,
      image: '/images/3000IQD.jpg',
      categoryTag: '3000IQD',
      categoryId: 5,
    },
    {
      category: 'EV5',
      quantity: quantityObject?.hasOwnProperty('EV5')
        ? quantityObject['EV5']
        : 0,
      image: '/images/5000IQD.jpg',
      categoryTag: '5000IQD',
      categoryId: 6,
    },
    {
      category: 'EVD1',
      quantity: quantityObject?.hasOwnProperty('EVD1')
        ? quantityObject['EVD1']
        : 0,
      image: '/images/5GB.jpg',
      categoryTag: '5GB',
      categoryId: 7,
    },
    {
      category: 'EV6',
      quantity: quantityObject?.hasOwnProperty('EV6')
        ? quantityObject['EV6']
        : 0,
      image: '/images/6000IQD.jpg',
      categoryTag: '6000IQD',
      categoryId: 8,
    },
    {
      category: 'EV10',
      quantity: quantityObject?.hasOwnProperty('EV10')
        ? quantityObject['EV10']
        : 0,
      image: '/images/10000IQD.jpg',
      categoryTag: '10000IQD',
      categoryId: 9,
    },
    {
      category: 'EVD2',
      quantity: quantityObject?.hasOwnProperty('EVD2')
        ? quantityObject['EVD2']
        : 0,
      image: '/images/10GB.jpg',
      categoryTag: '10GB',
      categoryId: 10,
    },
    {
      category: 'EV15',
      quantity: quantityObject?.hasOwnProperty('EV15')
        ? quantityObject['EV15']
        : 0,
      image: '/images/15000IQD.jpg',
      categoryTag: '15000IQD',
      categoryId: 11,
    },
    {
      category: 'EV18',
      quantity: quantityObject?.hasOwnProperty('EV18')
        ? quantityObject['EV18']
        : 0,
      image: '/images/18000IQD.jpg',
      categoryTag: '18000IQD',
      categoryId: 12,
    },
    {
      category: 'EV25',
      quantity: quantityObject?.hasOwnProperty('EV25')
        ? quantityObject['EV25']
        : 0,
      image: '/images/25000IQD.jpg',
      categoryTag: '25000IQD',
      categoryId: 13,
    },
    {
      category: 'EV35',
      quantity: quantityObject?.hasOwnProperty('EV35')
        ? quantityObject['EV35']
        : 0,
      image: '/images/35000IQD.jpg',
      categoryTag: '35000IQD',
      categoryId: 14,
    },
    {
      category: 'EV40',
      quantity: quantityObject?.hasOwnProperty('EV40')
        ? quantityObject['EV40']
        : 0,
      image: '/images/40000IQD.jpg',
      categoryTag: '40000IQD',
      categoryId: 15,
    },
    {
      category: 'EV50',
      quantity: quantityObject?.hasOwnProperty('EV50')
        ? quantityObject['EV50']
        : 0,
      image: '/images/50000IQD.jpg',
      categoryTag: '50000IQD',
      categoryId: 16,
    },
    {
      category: 'EV1H',
      quantity: quantityObject?.hasOwnProperty('EV1H')
        ? quantityObject['EV1H']
        : 0,
      image: '/images/100000IQD.jpg',
      categoryTag: '100000IQD',
      categoryId: 17,
    },

    {
      category: 'EB6',
      quantity: quantityObject?.hasOwnProperty('EB6')
        ? quantityObject['EB6']
        : 0,
      image: '/images/Max6000.jpg',
      categoryTag: 'Max6000',
      categoryId: 18,
    },
    {
      category: 'EB12',
      quantity: quantityObject?.hasOwnProperty('EB12')
        ? quantityObject['EB12']
        : 0,
      image: '/images/Max12000.jpg',
      categoryTag: 'Max12000',
      categoryId: 19,
    },
    {
      category: 'EB25',
      quantity: quantityObject?.hasOwnProperty('EB25')
        ? quantityObject['EB25']
        : 0,
      image: '/images/Max25000.jpg',
      categoryTag: 'Max25000',
      categoryId: 20,
    },
    {
      category: 'EB35',
      quantity: quantityObject?.hasOwnProperty('EB35')
        ? quantityObject['EB35']
        : 0,
      image: '/images/Max35000.jpg',
      categoryTag: 'Max35000',
      categoryId: 21,
    },
    {
      category: 'EB55',
      quantity: quantityObject?.hasOwnProperty('EB55')
        ? quantityObject['EB55']
        : 0,
      image: '/images/Max55000.jpg',
      categoryTag: 'Max55000',
      categoryId: 22,
    },

    {
      category: 'EVU5',
      quantity: quantityObject?.hasOwnProperty('EVU5')
        ? quantityObject['EVU5']
        : 0,
      image: '/images/Internet_premium_free50k.jpg',
      categoryTag: 'Internet_premium_free50k',
      categoryId: 23,
    },
  ];
};

export const getFormUploadedEvdDocumentsObject = (
  files,
  setFormUploadedDocumentsObject
) => {
  let dataRow;
  let fileContentArray;
  let uploadedDocumentObject = {};

  // loop through form uploaded files (files) one by one and create a an array of cards for each file
  for (let i = 0; i < files?.length; i++) {
    let uploadedDocumentArray = [];
    // When a file is selected
    const reader = new FileReader();
    reader.readAsText(files[i]);
    reader.onload = () => {
      if (reader?.result) {
        fileContentArray = reader.result?.split(/\r?\n/);
        //uploadedDoc info
        const element = fileContentArray[0];
        const propertyIndex = element.split(',');

        const firstRowStr = `batch: ${propertyIndex[0]}, quantity: ${propertyIndex[1]}, category: ${propertyIndex[2]}, tag: ${propertyIndex[3]}`;

        let firstRowObject = firstRowStr
          .split(',')
          .map((keyVal) => {
            return keyVal.split(':').map((_) => _.trim());
          })
          .reduce((accumulator, currentValue) => {
            accumulator[currentValue[0]] = currentValue[1];
            return accumulator;
          }, {});

        uploadedDocumentArray?.push(firstRowObject);

        // we need to start from row 1 in the form document because row 0 (firstRowObject) is already created
        for (let index = 1; index < fileContentArray.length; index++) {
          const element = fileContentArray[index];

          const keyIndex = element.split(',');
          if (keyIndex[2]) {
            uploadedDocumentArray[0].expirationDate = `${keyIndex[2]}`;
          }

          const rowStr = `sn: ${keyIndex[0]}, pin: ${keyIndex[1]}, category: ${propertyIndex[2]},status: available`;
          dataRow = rowStr
            .split(',')
            .map((keyVal) => {
              return keyVal.split(':').map((_) => _.trim());
            })
            .reduce((accumulator, currentValue) => {
              accumulator[currentValue[0]] = currentValue[1];
              return accumulator;
            }, {});

          uploadedDocumentArray?.push(dataRow);
        }
        // console.log('🚀 ~ uploadedDocumentArray:', uploadedDocumentArray);

        // Filter out all unwanted rows
        const cleanUploadedDocumentArray = uploadedDocumentArray.filter(
          (item) => {
            return (
              item.hasOwnProperty('batch') ||
              (item?.sn?.length === 11 &&
                (item?.pin?.length === 14 || item?.pin?.length === 15))
            );
          }
        );

        const finalUploadedDocumentArray = cleanUploadedDocumentArray.map(
          (item) => {
            return {
              ...item,
            };
          }
        );

        uploadedDocumentObject = {
          ...uploadedDocumentObject,
          [uploadedDocumentArray[0].batch]: finalUploadedDocumentArray,
        };
        setFormUploadedDocumentsObject(uploadedDocumentObject);
      }
    };

    reader.onerror = () => {
      console.log('file error', reader.error);
    };
  }
};

export const getFormUploadedEvsDocumentsObject = (
  files,
  category,
  setFormUploadedDocumentsObject
) => {
  let rowObject;
  let fileContentArray;
  let uploadedDocumentObject = {};

  for (let i = 0; i < files?.length; i++) {
    let uploadedDocumentArray = [];
    // When a file is selected
    const reader = new FileReader();
    reader.readAsText(files[i]);
    reader.onload = () => {
      if (reader?.result) {
        fileContentArray = reader.result?.split(/\r?\n/);
        //uploadedDoc info
        const docBatch = Math.floor(Math.random() * 1000000000);

        const firstRowStr = `batch: ${docBatch}, category: ${category}`;

        let firsRowObject = firstRowStr
          .split(',')
          .map((keyVal) => {
            return keyVal.split(':').map((_) => _.trim());
          })
          .reduce((accumulator, currentValue) => {
            accumulator[currentValue[0]] = currentValue[1];
            return accumulator;
          }, {});

        uploadedDocumentArray?.push(firsRowObject);

        // we need to start from row 0 in the form document
        for (let index = 0; index < fileContentArray.length; index++) {
          const element = fileContentArray[index];

          const keyIndex = element.split(',');

          const rowStr = `sn: ${keyIndex[0]}, pin: ${keyIndex[1]}, status: available`;
          rowObject = rowStr
            .split(',')
            .map((keyVal) => {
              return keyVal.split(':').map((_) => _.trim());
            })
            .reduce((accumulator, currentValue) => {
              accumulator[currentValue[0]] = currentValue[1];
              return accumulator;
            }, {});

          uploadedDocumentArray?.push(rowObject);
        }
        // console.log('🚀 ~ uploadedDocumentArray:', uploadedDocumentArray);

        // Filter out all unwanted rows
        const cleanUploadedDocument = uploadedDocumentArray.filter((item) => {
          return (
            item.hasOwnProperty('batch') ||
            (item?.sn?.length === 11 &&
              (item?.pin?.length === 14 || item?.pin?.length === 15))
          );
        });

        const finalUploadedDocumentArray = cleanUploadedDocument.map((item) => {
          return {
            ...item,
          };
        });

        uploadedDocumentObject = {
          ...uploadedDocumentObject,
          [docBatch]: finalUploadedDocumentArray,
        };
        setFormUploadedDocumentsObject(uploadedDocumentObject);
      }
    };

    reader.onerror = () => {
      console.log('file error', reader.error);
    };
  }
};

export const getFormUploadedDocumentsObjectFromExcelForPin15 = (
  files,
  setFormUploadedDocumentsObject
) => {
  let uploadedDocumentObject = {};
  // loop through form uploaded files (files) one by one and create a an array of cards for each file
  for (let i = 0; i < files?.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    let initialDocumentArray = [];
    let dataRowObject;
    let data;

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      data = XLSX.utils.sheet_to_json(sheet);
      let documentArray = [];
      let parsedDocumentArray;

      //Getting parsedDocumentArray from the uploaded document
      // Type 1 excel file with multiple columns
      if (data[0].Content) {
        for (let index = 0; index < data?.length; index++) {
          if (typeof data[index]?.Content === 'string') {
            const row = data[index]?.Content?.trim();
            if (row?.startsWith('القسیمة الإلکترونیة')) {
              documentArray.push(row);

              // Getting parsedDocumentArray
              parsedDocumentArray = documentArray?.map((row) => {
                const SNIndex = row.indexOf('SN');

                // getting 15 digit pin
                const pinIndex = SNIndex + 3;
                const pin = row.slice(pinIndex, pinIndex + 15).trim();

                // getting 11 digit sn
                const sinIndex = pinIndex + 15 + 1;
                const sn = row.slice(sinIndex, sinIndex + 11).trim();

                // Getting 10 digit date
                const dashIndex = row.indexOf('-');
                const date = row.slice(dashIndex - 3, dashIndex + 8).trim();

                let category;
                if (row.includes('E100K')) {
                  category = 'EV1H';
                } else if (row.includes('E10K')) {
                  category = 'EV10';
                } else if (row.includes('E5K')) {
                  category = 'EV5';
                } else if (row.includes('E25K')) {
                  category = 'EV25';
                } else if (row.includes('E40K')) {
                  category = 'EV40';
                } else if (row.includes('E50K')) {
                  category = 'EV50';
                } else if (row.includes('E15K')) {
                  category = 'EV15';
                }

                return `${sn},${pin},${date},${category}`;
              });
            }
          }
        }
        // Type 2 excel file with single column
      } else {
        for (let index = 0; index < data?.length; index++) {
          const elementObject = data[index];

          Object?.keys(elementObject)?.forEach((key) => {
            documentArray.push(elementObject[key]);
          });

          // Getting parsedDocumentArray
          parsedDocumentArray = documentArray?.map((row) => {
            const SNIndex = row?.indexOf('SN');

            // getting 15 digit pin
            const pinIndex = SNIndex + 3;
            const pin = row.slice(pinIndex, pinIndex + 15).trim();

            // getting 11 digit sn
            const sinIndex = pinIndex + 15 + 1;
            const sn = row.slice(sinIndex, sinIndex + 11).trim();

            // Getting 10 digit date
            const dashIndex = row.indexOf('-');
            const date = row.slice(dashIndex - 3, dashIndex + 8).trim();

            let category;
            if (row.includes('E100K')) {
              category = 'EV1H';
            } else if (row.includes('E10K')) {
              category = 'EV10';
            } else if (row.includes('E5K')) {
              category = 'EV5';
            } else if (row.includes('E25K')) {
              category = 'EV25';
            } else if (row.includes('E40K')) {
              category = 'EV40';
            } else if (row.includes('E50K')) {
              category = 'EV50';
            } else if (row.includes('E15K')) {
              category = 'EV15';
            }

            return `${sn},${pin},${date},${category}`;
          });
        }

        // Adding first row to parsedDocumentArray
        const row = Object.keys(data[0])[0];
        const SNIndex = row.indexOf('SN');

        // getting 15 digit pin
        const pinIndex = SNIndex + 3;
        const pin = row.slice(pinIndex, pinIndex + 15).trim();

        // getting 11 digit sn
        const sinIndex = pinIndex + 15 + 1;
        const sn = row.slice(sinIndex, sinIndex + 11).trim();

        // Getting 10 digit date
        const dashIndex = row.indexOf('-');
        const date = row.slice(dashIndex - 3, dashIndex + 8).trim();

        let category;
        if (row.includes('E100K')) {
          category = 'EV1H';
        } else if (row.includes('E10K')) {
          category = 'EV10';
        } else if (row.includes('E5K')) {
          category = 'EV5';
        } else if (row.includes('E25K')) {
          category = 'EV25';
        } else if (row.includes('E40K')) {
          category = 'EV40';
        } else if (row.includes('E50K')) {
          category = 'EV50';
        } else if (row.includes('E15K')) {
          category = 'EV15';
        }

        parsedDocumentArray.unshift(`${sn},${pin},${date},${category}`);
      }

      // console.log("🚀 ~ parsedDocumentArray:", parsedDocumentArray)

      // Getting initialDocumentArray from parsedDocumentArray
      for (let index = 0; index < parsedDocumentArray.length; index++) {
        const element = parsedDocumentArray[index];
        const keyIndex = element.split(',');

        const rowStr = `sn: ${keyIndex[0]}, pin: ${keyIndex[1]}, category: ${keyIndex[3]}, expirationDate: ${keyIndex[2]}, status: available`;

        dataRowObject = rowStr
          .split(',')
          .map((keyVal) => {
            return keyVal.split(':').map((_) => _.trim());
          })
          .reduce((accumulator, currentValue) => {
            accumulator[currentValue[0]] = currentValue[1];
            return accumulator;
          }, {});
        if (dataRowObject.sn && dataRowObject.pin) {
          initialDocumentArray?.push(dataRowObject);
        }
      }

      // console.log("🚀 ~ initialDocumentArray:", initialDocumentArray)

      const docBatch = Math.floor(Math.random() * 1000000000);

      // Filter out all unwanted rows
      const cleanDocumentArray = initialDocumentArray.filter((item) => {
        return (
          item.sn !== 'available' &&
          item.sn.length === 11 &&
          item.pin.length === 15
        );
      });

      const finalUploadedDocument = cleanDocumentArray.map((item) => {
        return {
          ...item,
          batch: docBatch,
        };
      });

      uploadedDocumentObject = {
        ...uploadedDocumentObject,
        [docBatch]: finalUploadedDocument,
      };
      // console.log("🚀 ~ uploadedDocumentObject:", uploadedDocumentObject)

      setFormUploadedDocumentsObject(uploadedDocumentObject);
    };

    reader?.readAsBinaryString(file);

    reader.onerror = () => {
      console.log('file error', reader.error);
    };
  }
};
export const getFormUploadedDocumentsObjectFromExcelForPin14 = (
  files,
  setFormUploadedDocumentsObject
) => {
  let uploadedDocumentObject = {};
  // loop through form uploaded files (files) one by one and create a an array of cards for each file
  for (let i = 0; i < files?.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    let initialDocumentArray = [];
    let dataRowObject;
    let data;

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      data = XLSX.utils.sheet_to_json(sheet);
      let documentArray = [];
      let parsedDocumentArray;

      //Getting parsedDocumentArray from the uploaded document
      // Type 1 excel file with multiple columns
      if (data[0].Content) {
        for (let index = 0; index < data?.length; index++) {
          if (typeof data[index]?.Content === 'string') {
            const row = data[index]?.Content?.trim();
            if (row?.startsWith('القسیمة الإلکترونیة')) {
              documentArray.push(row);

              // Getting parsedDocumentArray
              parsedDocumentArray = documentArray?.map((row) => {
                const SNIndex = row.indexOf('SN');

                // getting 15 digit pin
                const pinIndex = SNIndex + 3;
                const pin = row.slice(pinIndex, pinIndex + 14).trim();

                // getting 11 digit sn
                const sinIndex = pinIndex + 14 + 1;
                const sn = row.slice(sinIndex, sinIndex + 11).trim();

                // Getting 10 digit date
                const dashIndex = row.indexOf('-');
                const date = row.slice(dashIndex - 3, dashIndex + 8).trim();

                let category;
                if (row.includes('E100K')) {
                  category = 'EV1H';
                } else if (row.includes('E10K')) {
                  category = 'EV10';
                } else if (row.includes('E5K')) {
                  category = 'EV5';
                } else if (row.includes('E25K')) {
                  category = 'EV25';
                } else if (row.includes('E40K')) {
                  category = 'EV40';
                } else if (row.includes('E15K')) {
                  category = 'EV15';
                }

                return `${sn},${pin},${date},${category}`;
              });
            }
          }
        }
        // Type 2 excel file with single column
      } else {
        for (let index = 0; index < data?.length; index++) {
          const elementObject = data[index];

          Object?.keys(elementObject)?.forEach((key) => {
            documentArray.push(elementObject[key]);
          });

          // Getting parsedDocumentArray
          parsedDocumentArray = documentArray?.map((row) => {
            const SNIndex = row?.indexOf('SN');

            // getting 14 digit pin
            const pinIndex = SNIndex + 3;
            const pin = row.slice(pinIndex, pinIndex + 14).trim();

            // getting 11 digit sn
            const sinIndex = pinIndex + 14 + 1;
            const sn = row.slice(sinIndex, sinIndex + 11).trim();

            // Getting 10 digit date
            const dashIndex = row.indexOf('-');
            const date = row.slice(dashIndex - 3, dashIndex + 8).trim();

            let category;
            if (row.includes('E100K')) {
              category = 'EV1H';
            } else if (row.includes('E10K')) {
              category = 'EV10';
            } else if (row.includes('E5K')) {
              category = 'EV5';
            } else if (row.includes('E25K')) {
              category = 'EV25';
            } else if (row.includes('E40K')) {
              category = 'EV40';
            } else if (row.includes('E15K')) {
              category = 'EV15';
            }

            return `${sn},${pin},${date},${category}`;
          });
        }

        // Adding first row to parsedDocumentArray
        const row = Object.keys(data[0])[0];
        const SNIndex = row.indexOf('SN');

        // getting 15 digit pin
        const pinIndex = SNIndex + 3;
        const pin = row.slice(pinIndex, pinIndex + 14).trim();

        // getting 11 digit sn
        const sinIndex = pinIndex + 14 + 1;
        const sn = row.slice(sinIndex, sinIndex + 11).trim();

        // Getting 10 digit date
        const dashIndex = row.indexOf('-');
        const date = row.slice(dashIndex - 3, dashIndex + 8).trim();

        let category;
        if (row.includes('E100K')) {
          category = 'EV1H';
        } else if (row.includes('E10K')) {
          category = 'EV10';
        } else if (row.includes('E5K')) {
          category = 'EV5';
        } else if (row.includes('E25K')) {
          category = 'EV25';
        } else if (row.includes('E40K')) {
          category = 'EV40';
        } else if (row.includes('E15K')) {
          category = 'EV15';
        }

        parsedDocumentArray.unshift(`${sn},${pin},${date},${category}`);
      }

      // console.log("🚀 ~ parsedDocumentArray:", parsedDocumentArray)

      // Getting initialDocumentArray from parsedDocumentArray
      for (let index = 0; index < parsedDocumentArray.length; index++) {
        const element = parsedDocumentArray[index];
        const keyIndex = element.split(',');

        const rowStr = `sn: ${keyIndex[0]}, pin: ${keyIndex[1]}, category: ${keyIndex[3]}, expirationDate: ${keyIndex[2]}, status: available`;

        dataRowObject = rowStr
          .split(',')
          .map((keyVal) => {
            return keyVal.split(':').map((_) => _.trim());
          })
          .reduce((accumulator, currentValue) => {
            accumulator[currentValue[0]] = currentValue[1];
            return accumulator;
          }, {});
        if (dataRowObject.sn && dataRowObject.pin) {
          initialDocumentArray?.push(dataRowObject);
        }
      }

      // console.log("🚀 ~ initialDocumentArray:", initialDocumentArray)

      const docBatch = Math.floor(Math.random() * 1000000000);

      // Filter out all unwanted rows
      const cleanDocumentArray = initialDocumentArray.filter((item) => {
        return (
          item.sn !== 'available' &&
          item.sn.length === 11 &&
          item.pin.length === 14
        );
      });

      const finalUploadedDocument = cleanDocumentArray.map((item) => {
        return {
          ...item,
          batch: docBatch,
        };
      });

      uploadedDocumentObject = {
        ...uploadedDocumentObject,
        [docBatch]: finalUploadedDocument,
      };
      // console.log("🚀 ~ uploadedDocumentObject:", uploadedDocumentObject)

      setFormUploadedDocumentsObject(uploadedDocumentObject);
    };

    reader?.readAsBinaryString(file);

    reader.onerror = () => {
      console.log('file error', reader.error);
    };
  }
};

export const inspectDuplicates = (...arrays) => {
  const duplicates = [];
  const map = new Map();

  const fill = (array) =>
    array?.forEach((item) => {
      if (map.has(item.pin)) {
        duplicates.push(item);
      } else {
        map.set(item.pin, item);
      }
    });

  arrays.forEach((array) => fill(array));

  return duplicates;
};
