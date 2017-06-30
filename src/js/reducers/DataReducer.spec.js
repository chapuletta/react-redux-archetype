import expect from 'expect';
import reducers from './index';

describe('reducers', () => {
  it('should handle actions', () => {
    let state;
    state = reducers({data:{data:[],fetching:false,fetched:false,error:null}}, {type:'FETCH_DATA_FULFILLED',payload:[{id:1,name:'Leanne Graham',username:'Bret',email:'Sincere@april.biz',address:{street:'Kulas Light',suite:'Apt. 556',city:'Gwenborough',zipcode:'92998-3874',geo:{lat:'-37.3159',lng:'81.1496'}},phone:'1-770-736-8031 x56442',website:'hildegard.org',company:{name:'Romaguera-Crona',catchPhrase:'Multi-layered client-server neural-net',bs:'harness real-time e-markets'}},{id:2,name:'Ervin Howell',username:'Antonette',email:'Shanna@melissa.tv',address:{street:'Victor Plains',suite:'Suite 879',city:'Wisokyburgh',zipcode:'90566-7771',geo:{lat:'-43.9509',lng:'-34.4618'}},phone:'010-692-6593 x09125',website:'anastasia.net',company:{name:'Deckow-Crist',catchPhrase:'Proactive didactic contingency',bs:'synergize scalable supply-chains'}},{id:3,name:'Clementine Bauch',username:'Samantha',email:'Nathan@yesenia.net',address:{street:'Douglas Extension',suite:'Suite 847',city:'McKenziehaven',zipcode:'59590-4157',geo:{lat:'-68.6102',lng:'-47.0653'}},phone:'1-463-123-4447',website:'ramiro.info',company:{name:'Romaguera-Jacobson',catchPhrase:'Face to face bifurcated interface',bs:'e-enable strategic applications'}},{id:4,name:'Patricia Lebsack',username:'Karianne',email:'Julianne.OConner@kory.org',address:{street:'Hoeger Mall',suite:'Apt. 692',city:'South Elvis',zipcode:'53919-4257',geo:{lat:'29.4572',lng:'-164.2990'}},phone:'493-170-9623 x156',website:'kale.biz',company:{name:'Robel-Corkery',catchPhrase:'Multi-tiered zero tolerance productivity',bs:'transition cutting-edge web services'}},{id:5,name:'Chelsey Dietrich',username:'Kamren',email:'Lucio_Hettinger@annie.ca',address:{street:'Skiles Walks',suite:'Suite 351',city:'Roscoeview',zipcode:'33263',geo:{lat:'-31.8129',lng:'62.5342'}},phone:'(254)954-1289',website:'demarco.info',company:{name:'Keebler LLC',catchPhrase:'User-centric fault-tolerant solution',bs:'revolutionize end-to-end systems'}},{id:6,name:'Mrs. Dennis Schulist',username:'Leopoldo_Corkery',email:'Karley_Dach@jasper.info',address:{street:'Norberto Crossing',suite:'Apt. 950',city:'South Christy',zipcode:'23505-1337',geo:{lat:'-71.4197',lng:'71.7478'}},phone:'1-477-935-8478 x6430',website:'ola.org',company:{name:'Considine-Lockman',catchPhrase:'Synchronised bottom-line interface',bs:'e-enable innovative applications'}},{id:7,name:'Kurtis Weissnat',username:'Elwyn.Skiles',email:'Telly.Hoeger@billy.biz',address:{street:'Rex Trail',suite:'Suite 280',city:'Howemouth',zipcode:'58804-1099',geo:{lat:'24.8918',lng:'21.8984'}},phone:'210.067.6132',website:'elvis.io',company:{name:'Johns Group',catchPhrase:'Configurable multimedia task-force',bs:'generate enterprise e-tailers'}},{id:8,name:'Nicholas Runolfsdottir V',username:'Maxime_Nienow',email:'Sherwood@rosamond.me',address:{street:'Ellsworth Summit',suite:'Suite 729',city:'Aliyaview',zipcode:'45169',geo:{lat:'-14.3990',lng:'-120.7677'}},phone:'586.493.6943 x140',website:'jacynthe.com',company:{name:'Abernathy Group',catchPhrase:'Implemented secondary concept',bs:'e-enable extensible e-tailers'}},{id:9,name:'Glenna Reichert',username:'Delphine',email:'Chaim_McDermott@dana.io',address:{street:'Dayna Park',suite:'Suite 449',city:'Bartholomebury',zipcode:'76495-3109',geo:{lat:'24.6463',lng:'-168.8889'}},phone:'(775)976-6794 x41206',website:'conrad.com',company:{name:'Yost and Sons',catchPhrase:'Switchable contextually-based project',bs:'aggregate real-time technologies'}},{id:10,name:'Clementina DuBuque',username:'Moriah.Stanton',email:'Rey.Padberg@karina.biz',address:{street:'Kattie Turnpike',suite:'Suite 198',city:'Lebsackbury',zipcode:'31428-2261',geo:{lat:'-38.2386',lng:'57.2232'}},phone:'024-648-3804',website:'ambrose.net',company:{name:'Hoeger LLC',catchPhrase:'Centralized empowering task-force',bs:'target end-to-end models'}}]});
    expect(state.data.fetched).toEqual(true);
    expect(state.data.data.length).toEqual(10);
    expect(state.data.data[0]).toEqual({company:{bs:'harness real-time e-markets',catchPhrase:'Multi-layered client-server neural-net',name:'Romaguera-Crona'},website:'hildegard.org',phone:'1-770-736-8031 x56442',address:{geo:{lng:'81.1496',lat:'-37.3159'},zipcode:'92998-3874',city:'Gwenborough',suite:'Apt. 556',street:'Kulas Light'},email:'Sincere@april.biz',username:'Bret',name:'Leanne Graham',id:1});
    expect(state.data.data[1]).toEqual({company:{bs:'synergize scalable supply-chains',catchPhrase:'Proactive didactic contingency',name:'Deckow-Crist'},website:'anastasia.net',phone:'010-692-6593 x09125',address:{geo:{lng:'-34.4618',lat:'-43.9509'},zipcode:'90566-7771',city:'Wisokyburgh',suite:'Suite 879',street:'Victor Plains'},email:'Shanna@melissa.tv',username:'Antonette',name:'Ervin Howell',id:2});
    expect(state.data.data[2]).toEqual({company:{bs:'e-enable strategic applications',catchPhrase:'Face to face bifurcated interface',name:'Romaguera-Jacobson'},website:'ramiro.info',phone:'1-463-123-4447',address:{geo:{lng:'-47.0653',lat:'-68.6102'},zipcode:'59590-4157',city:'McKenziehaven',suite:'Suite 847',street:'Douglas Extension'},email:'Nathan@yesenia.net',username:'Samantha',name:'Clementine Bauch',id:3});
    expect(state.data.data[3]).toEqual({company:{bs:'transition cutting-edge web services',catchPhrase:'Multi-tiered zero tolerance productivity',name:'Robel-Corkery'},website:'kale.biz',phone:'493-170-9623 x156',address:{geo:{lng:'-164.2990',lat:'29.4572'},zipcode:'53919-4257',city:'South Elvis',suite:'Apt. 692',street:'Hoeger Mall'},email:'Julianne.OConner@kory.org',username:'Karianne',name:'Patricia Lebsack',id:4});
    expect(state.data.data[4]).toEqual({company:{bs:'revolutionize end-to-end systems',catchPhrase:'User-centric fault-tolerant solution',name:'Keebler LLC'},website:'demarco.info',phone:'(254)954-1289',address:{geo:{lng:'62.5342',lat:'-31.8129'},zipcode:'33263',city:'Roscoeview',suite:'Suite 351',street:'Skiles Walks'},email:'Lucio_Hettinger@annie.ca',username:'Kamren',name:'Chelsey Dietrich',id:5});
    expect(state.data.data[5]).toEqual({company:{bs:'e-enable innovative applications',catchPhrase:'Synchronised bottom-line interface',name:'Considine-Lockman'},website:'ola.org',phone:'1-477-935-8478 x6430',address:{geo:{lng:'71.7478',lat:'-71.4197'},zipcode:'23505-1337',city:'South Christy',suite:'Apt. 950',street:'Norberto Crossing'},email:'Karley_Dach@jasper.info',username:'Leopoldo_Corkery',name:'Mrs. Dennis Schulist',id:6});
    expect(state.data.data[6]).toEqual({company:{bs:'generate enterprise e-tailers',catchPhrase:'Configurable multimedia task-force',name:'Johns Group'},website:'elvis.io',phone:'210.067.6132',address:{geo:{lng:'21.8984',lat:'24.8918'},zipcode:'58804-1099',city:'Howemouth',suite:'Suite 280',street:'Rex Trail'},email:'Telly.Hoeger@billy.biz',username:'Elwyn.Skiles',name:'Kurtis Weissnat',id:7});
    expect(state.data.data[7]).toEqual({company:{bs:'e-enable extensible e-tailers',catchPhrase:'Implemented secondary concept',name:'Abernathy Group'},website:'jacynthe.com',phone:'586.493.6943 x140',address:{geo:{lng:'-120.7677',lat:'-14.3990'},zipcode:'45169',city:'Aliyaview',suite:'Suite 729',street:'Ellsworth Summit'},email:'Sherwood@rosamond.me',username:'Maxime_Nienow',name:'Nicholas Runolfsdottir V',id:8});
    expect(state.data.data[8]).toEqual({company:{bs:'aggregate real-time technologies',catchPhrase:'Switchable contextually-based project',name:'Yost and Sons'},website:'conrad.com',phone:'(775)976-6794 x41206',address:{geo:{lng:'-168.8889',lat:'24.6463'},zipcode:'76495-3109',city:'Bartholomebury',suite:'Suite 449',street:'Dayna Park'},email:'Chaim_McDermott@dana.io',username:'Delphine',name:'Glenna Reichert',id:9});
    expect(state.data.data[9]).toEqual({company:{bs:'target end-to-end models',catchPhrase:'Centralized empowering task-force',name:'Hoeger LLC'},website:'ambrose.net',phone:'024-648-3804',address:{geo:{lng:'57.2232',lat:'-38.2386'},zipcode:'31428-2261',city:'Lebsackbury',suite:'Suite 198',street:'Kattie Turnpike'},email:'Rey.Padberg@karina.biz',username:'Moriah.Stanton',name:'Clementina DuBuque',id:10});
  })
})
