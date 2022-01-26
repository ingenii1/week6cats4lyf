import faker from  'faker';


const getName = () =>{

    let name = faker.name.firstname();
    console.log(name);
    return name

  }