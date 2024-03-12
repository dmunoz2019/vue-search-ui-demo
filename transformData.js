const data = require("./src/data/ofac-consolidated.json");
function transformData(data) {
  return data.sdnList.sdnEntry.map(entry => {
    let transformedEntry = {
      uid: entry.uid[0],
      firstName: entry.firstName ? entry.firstName[0] : "",
      lastName: entry.lastName ? entry.lastName[0] : "",
      sdnType: entry.sdnType[0],
      programs: entry.programList
        ? entry.programList.map(p => p.program[0])
        : []
    };

    if (entry.akaList && entry.akaList[0] && entry.akaList[0].aka) {
      transformedEntry.aka = entry.akaList[0].aka.map(aka => ({
        uid: aka.uid[0],
        type: aka.type[0],
        category: aka.category[0],
        lastName: aka.lastName[0],
        firstName:
          aka.firstName && aka.firstName.length > 0 ? aka.firstName[0] : ""
      }));
    } else {
      transformedEntry.aka = [];
    }

    if (
      entry.dateOfBirthList &&
      entry.dateOfBirthList[0] &&
      entry.dateOfBirthList[0].dateOfBirthItem
    ) {
      // lets log to check the uid

      transformedEntry.dateOfBirth = entry.dateOfBirthList[0].dateOfBirthItem.map(
        dob => ({
          uid: dob.uid[0],
          dateOfBirth: dob.dateOfBirth[0],
          mainEntry: dob.mainEntry[0] === "true"
        })
      );
    } else {
      transformedEntry.dateOfBirth = [];
    }

    // Handle placeOfBirthList
    if (
      entry.placeOfBirthList &&
      entry.placeOfBirthList[0] &&
      entry.placeOfBirthList[0].placeOfBirthItem
    ) {
      transformedEntry.placeOfBirth = entry.placeOfBirthList[0].placeOfBirthItem.map(
        pob => ({
          uid: pob.uid[0],
          placeOfBirth: pob.placeOfBirth[0],
          mainEntry: pob.mainEntry[0] === "true"
        })
      );
    } else {
      transformedEntry.placeOfBirth = [];
    }

    return transformedEntry;
  });
}

const transformedData = transformData(data);

console.log(transformedData);
