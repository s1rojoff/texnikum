import {ref} from 'vue'
export function useCoverageFn(){
    const fakeStudents = ref<{region: string,name:string, boy: number, girl: number}[]>([
        {
            region: 'buxoro',
            name: 'Buxoro viloyati',
            boy: 23,
            girl: 24
        },
        {
            region: 'xorazm',
            name: 'Xorazm viloyati',
            boy: 25,
            girl: 45
        },
        {
            region: 'qoraqalpoq',
            name: "Qoraqalpog'iston r",
            boy: 45,
            girl: 49
        },
        {
            region: 'navoiy',
            name: 'Navoiy viloyati',
            boy: 12,
            girl: 24
        },
        {
            region: 'qashqadaryo',
            name: 'Qashqadaryo viloyati',
            boy: 43,
            girl: 54
        },
        {
            region: 'surxondaryo',
            name: 'Surxandaryo viloyati',
            boy: 33,
            girl: 14
        },
        {
            region: 'andijon',
            name: 'Andijon viloyati',
            boy: 75,
            girl: 74
        },
        {
            region: 'fargona',
            name: "Farg'ona viloyati",
            boy: 34,
            girl: 65
        },
        {
            region: 'namangan',
            name: 'Namangan viloyati',
            boy: 67,
            girl: 75
        },
        {
            region: 'sirdaryo',
            name: 'Sirdaryo viloyati',
            boy: 34,
            girl: 74
        },
        {
            region: 'toshkent',
            name: 'Toshkent viloyati',
            boy: 35,
            girl: 43
        },{
            region: 'toshkent_c',
            name: 'Toshkent shahar',
            boy: 23,
            girl: 36
        },
    ])
    return{
        fakeStudents,
    }
}
