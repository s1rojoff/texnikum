import {ref} from 'vue'
export function useCoverageFn(){
    const fakeStudents = ref<{region: string,name:string, boy: number, girl: number}[]>([
        {
            region: 'buxoro',
            name: 'Buxoro',
            boy: 23,
            girl: 24
        },
        {
            region: 'xorazm',
            name: 'Xorazm',
            boy: 25,
            girl: 45
        },
        {
            region: 'qoraqalpoq',
            name: "Qoraqalpog'iston",
            boy: 45,
            girl: 49
        },
        {
            region: 'navoiy',
            name: 'Navoiy',
            boy: 12,
            girl: 24
        },
        {
            region: 'qashqadaryo',
            name: 'Qashqadaryo',
            boy: 43,
            girl: 54
        },
        {
            region: 'surxondaryo',
            name: 'Surxandaryo',
            boy: 33,
            girl: 14
        },
        {
            region: 'andijon',
            name: 'Andijon',
            boy: 75,
            girl: 74
        },
        {
            region: 'fargona',
            name: "Farg'ona",
            boy: 34,
            girl: 65
        },
        {
            region: 'namangan',
            name: 'Namangan',
            boy: 67,
            girl: 75
        },
        {
            region: 'sirdaryo',
            name: 'Sirdaryo',
            boy: 34,
            girl: 74
        },
        {
            region: 'toshkent',
            name: 'Toshkent',
            boy: 35,
            girl: 43
        },
    ])
    return{
        fakeStudents
    }
}
