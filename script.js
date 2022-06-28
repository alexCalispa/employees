function findRepeatedSchedule() {//<--reagrupo el objeto en función de schedule:
  
  const obj = JSON.parse(content);//<--we convert our flat data into json or matrix.

  const res = obj.employees.reduce((p, c) => {

    c.schedule.forEach(h => {// <-- We go through the schedule of each element of employees.

      if (h in p) {// <-- If the schedule previously exists in the accumulator.

        p[h].push(c.name);// <-- We add the name.

      } else {// <-- If it does not exist previously.

        p[h] = [c.name];// <-- We create the schedule and add the name to it in an array.
      }

    });

    return p;

  }, {});// <-- After this, there are all the schedules with all the associated names
  for (h in res) {// <--We traverse the previously created object.

    if (res[h].length < 2) {
      delete res[h];// <-- We remove from the object all the elements that have less than 2 names.
    } else {
      res[h] = res[h].join("-")// <-- The rest we unite with a -.
    }
  }
  console.table([res]); //<--show in console.
}





