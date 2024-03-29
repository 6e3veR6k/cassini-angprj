import { AgentActStatus } from "./agent-act-status.model";
import { AgentActByProgram } from "./agent-act.model";
import { AgentChanels } from "./agent-chanels.model";
import { Branch } from "./branch.model";

export const ACTS_STATUSES: AgentActStatus[] = [
  { guid: '22C7D1EF-CFCF-4F37-8959-003C6669830A', name: 'Затверджений' },
  { guid: '6A328C2F-E582-4334-A6EA-57A1CE6E4D0F', name: 'На узгодженні' },
  { guid: '52AE0988-A1AA-4DDD-AF55-E10B7A067EEB', name: 'Новий' },
  { guid: '8E8AD750-E856-4CB6-B788-F9C0A8321EF9', name: 'Сторно' }
];



export const AGENT_CHANELS: AgentChanels[] = [
  { guid: 'B30DF72F-8FE8-48CC-B6BE-1257B89994E6', code: 3, name: '3 - Дистанційний канал' },
  { guid: '0CEC5FC1-D4F4-456D-894C-166D44CBFCF4', code: 1, name: '1 - Агентський канал' },
  { guid: 'DEA7E7CD-CC84-4502-A77B-17FD8E786CAC', code: 14, name: '14 - юридичні особи - банки, які укладають договори страхування, за якими вони не є вигодонабувачами' },
  { guid: 'B4E4E51E-9AD0-4BDB-9BBD-4CD9C07A23A3', code: 12, name: '12 - страхові  агенти - фізичні особи, які працюють за договорами про надання страхових агентських послуг цивільно-правового характеру' },
  { guid: 'B48BD0-D199-49B5-907B-5429B30A49F8',   code: 2, name: '2 - Офісний канал' },
  { guid: '1A08CF09-426C-4560-B7F2-5486B4CFF18E', code: 31, name: '31 - Iнтернет' },
  { guid: '09002C29-5E52-497B-828F-5A481AD08C0D', code: 30, name: '30 - Зведений канал партнерських продажів' },
  { guid: 'F20F707B-833D-40B5-B18D-5F2DC96A83B9', code: 13, name: '13 - інші страхові агенти - фізичні особи' },
  { guid: 'A2C410CE-5C79-4465-94E5-9B3E8185DA03', code: 21, name: '21 - штатні працівники структурних підрозділів НАСК “ОРАНТА”' },
  { guid: '0AD25169-E1F8-454F-924B-A778787D603B', code: 33, name: '33 - Інші дистанційні канали' },
  { guid: 'A1F4BCFB-2EB4-405F-8EEB-B39C803ED43D', code: 11, name: '11 - страхові  агенти - фізичні особи, які працюють за трудовими договорами' },
  { guid: 'C8F3ED3E-3D7A-4B0A-B047-BF098D6A9D36', code: 15, name: '15 - юридичні особи - банки, які укладають договори страхування заставного майна, за якими вигодонабувачем є банк' },
  { guid: 'E5FDE471-8433-4E8D-864D-D946F1C7E27C', code: 17, name: '17 - Агенти – юридичні особи (автоділери, туристичні фірми, інші юридичні особи різних форм власності та діяльності)' },
  { guid: '324128F2-B5A8-4CC5-AA9D-DD6B1CF6E562', code: 19, name: '19 - інші страхові агенти' },
  { guid: 'F6669158-7447-4C06-8ACD-DE289006C045', code: 16, name: '16 - Агенти – юридичні особи – інші страхові компанії резиденти' },
  { guid: '6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA', code: 22, name: '22 - фізичні особи - суб’єкти підприємницької діяльності (Категорія 1)' },
  { guid: 'CCC44FBB-1F62-4B05-B6CB-EF054D6EB7B4', code: 32, name: '32 - Телемаркетинг' },
  { guid: '622EAEFC-BF30-4C9F-9A4B-FCB046EB5E18', code: 18, name: '18 - фізичні особи - суб’єкти підприємницької діяльності (Категорія 2)' },
];


export const BRANCHES: Branch[] = [
  { guid: '6D9B2852-3BE4-419B-809E-5C8FD54CDACE', code: '01', name: 'Кримська республіканська дирекція НАСК "Оранта"' },
  { guid: '244A1A08-487D-48F3-876D-2A884AE81B45', code: '02', name: 'Вінницька обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'F17BC77B-B239-4E83-B334-4972FEDF125E', code: '03', name: 'Волинська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '546F4E23-F1F1-4DB5-87B9-F902C930CF3B', code: '04', name: 'Дніпропетровська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'A374FC8E-A235-4003-9CAC-CE17BAA2595E', code: '05', name: 'Маріупольська дирекція НАСК "Оранта"' },
  { guid: '362CADA1-B69C-46FF-B632-1106C28C7D89', code: '06', name: 'Житомирська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '6FAD765F-FA8F-4799-975E-B8E8A2B3F9D9', code: '07', name: 'Закарпатська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'AFE8571A-326A-40B4-A6F6-8C246638650A', code: '08', name: 'Запорізька обласна дирекція НАСК "ОРАНТА"' },
  { guid: '2218075F-113F-4A66-AE1D-634197CC0EF8', code: '09', name: 'Івано-Франківська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '66280D52-9556-43C0-B2A2-65C5E9F58720', code: '10', name: 'Київська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'A17B2FEE-657A-478E-8387-424B341F8D3B', code: '11', name: 'Кіровоградська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '087F9F12-803A-4232-BBB2-BD3E15BA38CF', code: '12', name: 'Луганська обласна дирекція НАСК "Оранта"' },
  { guid: '3416FFD1-728D-4F78-B9EE-7F23A239937C', code: '13', name: 'Львівська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'C4E80870-3EF2-4A4E-81A2-C7C55B2C97A8', code: '14', name: 'Миколаївська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '30E0B8E4-BF98-41C8-BEA2-DDA606CE3EA0', code: '15', name: 'Одеська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'B11E59DE-1068-4AA3-8FAF-8F74780B04AE', code: '16', name: 'Полтавська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '920F19E1-91B5-453D-B87A-E79AB8877090', code: '17', name: 'Рівненська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'BC755DBE-FD4D-4A09-BE18-77BBEDA1466B', code: '18', name: 'Сумська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '2E6BD292-3BD6-4F22-9677-BCB7148D1FEF', code: '19', name: 'Тернопільська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'E4D7C025-B075-471A-9374-B5E58811E5E1', code: '20', name: 'Харківська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'CA67E967-3AB1-4998-97AC-699FD9443237', code: '21', name: 'Херсонська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '1559AE01-D47A-46B5-A871-6518EF31886F', code: '22', name: 'Хмельницька обласна дирекція НАСК "ОРАНТА"' },
  { guid: '8BFCED84-F670-4BFA-9F43-80073ABFFE60', code: '23', name: 'Черкаська обласна дирекція НАСК "ОРАНТА"' },
  { guid: '1AAFD04C-AF40-47FC-AAA9-976289487F39', code: '24', name: 'Чернівецька обласна дирекція НАСК "ОРАНТА"' },
  { guid: '6DF2498D-BD53-488A-AC1E-9122026270B1', code: '25', name: 'Чернігівська обласна дирекція НАСК "ОРАНТА"' },
  { guid: 'F92F41CF-8315-4CD0-B776-F89D272C547E', code: '26', name: 'Київська міська дирекція НАСК "ОРАНТА"' },
  { guid: '826FE894-3E10-46B8-BF1B-962A928E8C72', code: '27', name: 'Севастопольська міська дирекція НАСК "Оранта"' },
  { guid: '3FFDA769-8CCA-43F7-9399-D1F1E1511CD6', code: '28', name: 'Донецька обласна дирекція НАСК "Оранта"' },
  { guid: '64761FDC-6C95-4998-94A3-E870C056F1A1', code: '29', name: 'Головний офіс' },
  { guid: '69813D27-73B9-4758-8DA8-2541C80C9A85', code: '30', name: 'ДБС НАСК "ОРАНТА"' },
  { guid: '6B892915-042B-44D0-9251-D2AE953D1F32', code: '31', name: 'Дирекція по роботі з VIP- клієнтами та брокерами' },
  { guid: '7145B987-5FFE-4AE7-8473-5F3236B14C3A', code: '33', name: 'Київська регіональна дирекція ПАТ "НАСК "ОРАНТА"' },
  { guid: '0654CE53-E889-48AB-8FB3-D130CC5EC6C3', code: '99', name: 'ПС ГРД НАСК "Оранта"' }
]

export const AGENTS_ACTS_DATA: AgentActByProgram[] = [
  {
    "ActId": 867114,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 1738816648,
    "AgentName": "Мироненко Г.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": '1390',
    "DirectionGid": "3416FFD1-728D-4F78-B9EE-7F23A239937C",
    "ProgramCode": 234,
    "RealPaymentValue": 3544,
    "CommissionValue": 531.6,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867497,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3050922281,
    "AgentName": "Брикайло О.М.",
    "DocumentType": "Агентський договір",
    "BranchCode": "0301",
    "DirectionGid": "F17BC77B-B239-4E83-B334-4972FEDF125E",
    "ProgramCode": 231,
    "RealPaymentValue": 17354,
    "CommissionValue": 3470.8,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867122,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3141920074,
    "AgentName": "Терещенко О.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": '2317',
    "DirectionGid": "8BFCED84-F670-4BFA-9F43-80073ABFFE60",
    "ProgramCode": 234,
    "RealPaymentValue": 11388,
    "CommissionValue": 2049.84,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867071,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 2530102077,
    "AgentName": "Мейсарош Т.Т.",
    "DocumentType": "Агентський договір",
    "BranchCode": "0712",
    "DirectionGid": "6FAD765F-FA8F-4799-975E-B8E8A2B3F9D9",
    "ProgramCode": 231,
    "RealPaymentValue": 33505,
    "CommissionValue": 6701,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 868056,
    "StartPeriod": "2024-01-17",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3532303963,
    "AgentName": "Недашківська А.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": "0318",
    "DirectionGid": "F17BC77B-B239-4E83-B334-4972FEDF125E",
    "ProgramCode": 232,
    "RealPaymentValue": 11463,
    "CommissionValue": 1604.82,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867842,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3592612140,
    "AgentName": "Данилова К.Р.",
    "DocumentType": "Агентський договір",
    "BranchCode": '2317',
    "DirectionGid": "8BFCED84-F670-4BFA-9F43-80073ABFFE60",
    "ProgramCode": 234,
    "RealPaymentValue": 4702,
    "CommissionValue": 940.4,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 868035,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 2976504406,
    "AgentName": "Романчишина А.В.",
    "DocumentType": "Агентський договір",
    "BranchCode": "0290",
    "DirectionGid": "244A1A08-487D-48F3-876D-2A884AE81B45",
    "ProgramCode": 310,
    "RealPaymentValue": 1170,
    "CommissionValue": 468,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867807,
    "StartPeriod": "2024-01-17",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 2856115186,
    "AgentName": "Личова С.М.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": "0701",
    "DirectionGid": "6FAD765F-FA8F-4799-975E-B8E8A2B3F9D9",
    "ProgramCode": 232,
    "RealPaymentValue": 11479,
    "CommissionValue": 1951.43,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867862,
    "StartPeriod": "2024-01-17",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3519907780,
    "AgentName": "Климентова К.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": '1824',
    "DirectionGid": "BC755DBE-FD4D-4A09-BE18-77BBEDA1466B",
    "ProgramCode": 234,
    "RealPaymentValue": 10928,
    "CommissionValue": 689.8,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867742,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "A1F4BCFB-2EB4-405F-8EEB-B39C803ED43D",
    "IdentificationCodeEDRPOU": 2490815741,
    "AgentName": "Звірич Г.В.",
    "DocumentType": "Трудовий договір",
    "BranchCode": "0708",
    "DirectionGid": "6FAD765F-FA8F-4799-975E-B8E8A2B3F9D9",
    "ProgramCode": 247,
    "RealPaymentValue": 1445,
    "CommissionValue": 235.62,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867733,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "A1F4BCFB-2EB4-405F-8EEB-B39C803ED43D",
    "IdentificationCodeEDRPOU": 2645217021,
    "AgentName": "Музиченко І.А.",
    "DocumentType": "Трудовий договір",
    "BranchCode": "0627",
    "DirectionGid": "362CADA1-B69C-46FF-B632-1106C28C7D89",
    "ProgramCode": 351,
    "RealPaymentValue": 750,
    "CommissionValue": 165,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867847,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3323614557,
    "AgentName": "Бірюков С.О.",
    "DocumentType": "Агентський договір",
    "BranchCode": '1804',
    "DirectionGid": "BC755DBE-FD4D-4A09-BE18-77BBEDA1466B",
    "ProgramCode": 233,
    "RealPaymentValue": 34,
    "CommissionValue": 6.8,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 868065,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 2510204217,
    "AgentName": "Бондаренко О.О.",
    "DocumentType": "Агентський договір",
    "BranchCode": '1825',
    "DirectionGid": "BC755DBE-FD4D-4A09-BE18-77BBEDA1466B",
    "ProgramCode": 231,
    "RealPaymentValue": 8769,
    "CommissionValue": 1753.8,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867567,
    "StartPeriod": "2024-01-10",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3226409993,
    "AgentName": "Гончаренко С.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": '2313',
    "DirectionGid": "8BFCED84-F670-4BFA-9F43-80073ABFFE60",
    "ProgramCode": 234,
    "RealPaymentValue": 4426,
    "CommissionValue": 973.72,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
    {
    "ActId": 867114,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 1738816648,
    "AgentName": "Мироненко Г.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": '1390',
    "DirectionGid": "3416FFD1-728D-4F78-B9EE-7F23A239937C",
    "ProgramCode": 234,
    "RealPaymentValue": 3544,
    "CommissionValue": 531.6,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867497,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3050922281,
    "AgentName": "Брикайло О.М.",
    "DocumentType": "Агентський договір",
    "BranchCode": "0301",
    "DirectionGid": "F17BC77B-B239-4E83-B334-4972FEDF125E",
    "ProgramCode": 231,
    "RealPaymentValue": 17354,
    "CommissionValue": 3470.8,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867122,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3141920074,
    "AgentName": "Терещенко О.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": '2317',
    "DirectionGid": "8BFCED84-F670-4BFA-9F43-80073ABFFE60",
    "ProgramCode": 234,
    "RealPaymentValue": 11388,
    "CommissionValue": 2049.84,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867071,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 2530102077,
    "AgentName": "Мейсарош Т.Т.",
    "DocumentType": "Агентський договір",
    "BranchCode": "0712",
    "DirectionGid": "6FAD765F-FA8F-4799-975E-B8E8A2B3F9D9",
    "ProgramCode": 231,
    "RealPaymentValue": 33505,
    "CommissionValue": 6701,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 868056,
    "StartPeriod": "2024-01-17",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3532303963,
    "AgentName": "Недашківська А.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": "0318",
    "DirectionGid": "F17BC77B-B239-4E83-B334-4972FEDF125E",
    "ProgramCode": 232,
    "RealPaymentValue": 11463,
    "CommissionValue": 1604.82,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867842,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3592612140,
    "AgentName": "Данилова К.Р.",
    "DocumentType": "Агентський договір",
    "BranchCode": '2317',
    "DirectionGid": "8BFCED84-F670-4BFA-9F43-80073ABFFE60",
    "ProgramCode": 234,
    "RealPaymentValue": 4702,
    "CommissionValue": 940.4,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 868035,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 2976504406,
    "AgentName": "Романчишина А.В.",
    "DocumentType": "Агентський договір",
    "BranchCode": "0290",
    "DirectionGid": "244A1A08-487D-48F3-876D-2A884AE81B45",
    "ProgramCode": 310,
    "RealPaymentValue": 1170,
    "CommissionValue": 468,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867807,
    "StartPeriod": "2024-01-17",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 2856115186,
    "AgentName": "Личова С.М.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": "0701",
    "DirectionGid": "6FAD765F-FA8F-4799-975E-B8E8A2B3F9D9",
    "ProgramCode": 232,
    "RealPaymentValue": 11479,
    "CommissionValue": 1951.43,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867862,
    "StartPeriod": "2024-01-17",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3519907780,
    "AgentName": "Климентова К.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": '1824',
    "DirectionGid": "BC755DBE-FD4D-4A09-BE18-77BBEDA1466B",
    "ProgramCode": 234,
    "RealPaymentValue": 10928,
    "CommissionValue": 689.8,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867742,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "A1F4BCFB-2EB4-405F-8EEB-B39C803ED43D",
    "IdentificationCodeEDRPOU": 2490815741,
    "AgentName": "Звірич Г.В.",
    "DocumentType": "Трудовий договір",
    "BranchCode": "0708",
    "DirectionGid": "6FAD765F-FA8F-4799-975E-B8E8A2B3F9D9",
    "ProgramCode": 247,
    "RealPaymentValue": 1445,
    "CommissionValue": 235.62,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867733,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "A1F4BCFB-2EB4-405F-8EEB-B39C803ED43D",
    "IdentificationCodeEDRPOU": 2645217021,
    "AgentName": "Музиченко І.А.",
    "DocumentType": "Трудовий договір",
    "BranchCode": "0627",
    "DirectionGid": "362CADA1-B69C-46FF-B632-1106C28C7D89",
    "ProgramCode": 351,
    "RealPaymentValue": 750,
    "CommissionValue": 165,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867847,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3323614557,
    "AgentName": "Бірюков С.О.",
    "DocumentType": "Агентський договір",
    "BranchCode": '1804',
    "DirectionGid": "BC755DBE-FD4D-4A09-BE18-77BBEDA1466B",
    "ProgramCode": 233,
    "RealPaymentValue": 34,
    "CommissionValue": 6.8,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 868065,
    "StartPeriod": "2024-01-01",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 2510204217,
    "AgentName": "Бондаренко О.О.",
    "DocumentType": "Агентський договір",
    "BranchCode": '1825',
    "DirectionGid": "BC755DBE-FD4D-4A09-BE18-77BBEDA1466B",
    "ProgramCode": 231,
    "RealPaymentValue": 8769,
    "CommissionValue": 1753.8,
    "CommissionTypeGID": "8CC6A11E-9E88-48A3-9C8C-3F3EC92E16AD",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  },
  {
    "ActId": 867567,
    "StartPeriod": "2024-01-10",
    "ChanelGID": "6C3AC3D1-AC15-4C10-A6EE-DEE30C9DAFEA",
    "IdentificationCodeEDRPOU": 3226409993,
    "AgentName": "Гончаренко С.В.",
    "DocumentType": "Договір на надання ІКП",
    "BranchCode": '2313',
    "DirectionGid": "8BFCED84-F670-4BFA-9F43-80073ABFFE60",
    "ProgramCode": 234,
    "RealPaymentValue": 4426,
    "CommissionValue": 973.72,
    "CommissionTypeGID": "BEDED8D6-159C-4DEC-869C-25416FCAD1FF",
    "StatusGID": "22C7D1EF-CFCF-4F37-8959-003C6669830A"
  }
];
