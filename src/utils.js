import * as dharmaData from "./data.json";
import { isEmpty } from "lodash";

export const jsonFormater = (data) => {
  console.log("data.termin111ology", data);
  const merge1 = data
    .map((d, index) => {
      return {
        ...d,
        index: index + 1,
      };
      // if (!d.term && d.description.length > 0) {
      //   for (var i = 0; i < 10; i++) {
      //     const currentData = data[index - i];
      //     if (currentData.term) {
      //       data[index - i] = {
      //         ...data[index - i],
      //         description: [...currentData.description, d.description[0]],
      //       };
      //       d.description = [];
      //       break;
      //     }
      //   }
      //   return {
      //     ...d,
      //     description: [],
      //   };
      // }
      // return {
      //   ...d,
      // };
      // const { source, ...rest } = d;
      // return {
      //   ...rest,
      // };
      // const nonEmptyD = d.description.filter((d) => !isEmpty(d));
      // return {
      //   ...d,
      //   description: [...nonEmptyD],
      // };
      // if(d.index.length > 20) {
      //     data[index-1]  = {
      //         ...data[index-1],
      //         description: {
      //             ...data[index-1].description,
      //             {
      //             }
      //         }
      //     }
      // if (d.index.length > 20) {
      //   data[index - 1] = {
      //     ...data[index - 1],
      //     description: [
      //       ...data[index - 1].description,
      //       {
      //         subDescription: d.index,
      //       },
      //     ],
      //   };
      //   return {
      //     ...d,
      //     index: "",
      //   };
      // }
      // return d;
    })
    .filter((d) => {
      return !isEmpty(d.term) && !isEmpty(d.description);
    });

  //   const merge1 = data.reduce((acc, cur, index) => {
  //     if (cur.index.length > 20) {
  //         data[index-1] = {
  //             ...data[index-1],

  //         }
  //     } else {
  //     }
  //   }, []);
  //   const merge1 = data.filter((d) => {
  //     console.log(d.index.length);
  //     return d.description.length >= 0;
  //   });
  return merge1;
};
console.log("dharmaData", dharmaData);
const merge1 = jsonFormater(dharmaData.terminology);

console.log("merge1", JSON.stringify(merge1));
