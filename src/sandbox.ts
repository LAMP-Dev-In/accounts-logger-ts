type StringOrNum = string | number;

type ObjWithName = {name: string, uid: StringOrNum};

let logDetails = (uid: StringOrNum, item: string) => {
    console.log(`This ${item} has a uid ${uid}`);
}

logDetails(34, 'Pen');


let greet = (user: ObjWithName) =>{
    console.log(`${user.name} has uid ${user.uid} & says hello`);
}

greet({name:'gtm', uid:'KD12MO'});


let greetAgain = (user: ObjWithName) =>{
    console.log(`${user.name} has uid ${user.uid} & greet again hello`);
}

greetAgain({name:'Kuchiku', uid:'123POK'});
