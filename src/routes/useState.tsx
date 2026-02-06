import { createFileRoute } from '@tanstack/react-router'
import { ReactNode, useState, Component, Children } from 'react'
import Header from '../components/Header'

export const Route = createFileRoute('/useState')({
  component: RouteComponent,
})

function RouteComponent() {
  const [CalcScreen, setCalcScreen] = useState('0')

  // addEventListener('keydown',(event)=>{
  //   if(!isNaN(parseInt(event.key))){
  //     setCalcScreen(addCharOnCalc(CalcScreen,event.key))
  //   }
  // })

  return (
    <>
      <div className='grid grid-cols-4 grid-rows-6 items-center justify-center h-[calc(100dvh-64px)] w-[calc(97px*4+12px*3)] text-3xl gap-3 py-4 m-auto font-bold'>
        <input className='h-full col-start-1 col-end-5 text-end' onChange={(element)=>{setCalcScreen(element.target.value)}} value={CalcScreen}></input>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-red-600 hover:text-red-500 active:bg-red-600 active:text-white col-start-1 row-start-2 ' onClick={()=>{setCalcScreen('0')}}>C</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-1 row-start-5' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'1'))}}>1</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-2 row-start-5' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'2'))}}>2</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-3 row-start-5' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'3'))}}>3</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-1 row-start-4' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'4'))}}>4</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-2 row-start-4' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'5'))}}>5</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-3 row-start-4' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'6'))}}>6</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-1 row-start-3' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'7'))}}>7</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-2 row-start-3' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'8'))}}>8</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-3 row-start-3' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'9'))}}>9</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-emerald-700 hover:text-emerald-600 active:bg-emerald-700 active:text-white col-start-2 row-start-6' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'0'))}}>0</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-cyan-600 hover:text-cyan-500 active:bg-cyan-600 active:text-white col-start-2 row-start-2' disabled={true} onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'()'))}}>( )</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-cyan-600 hover:text-cyan-500 active:bg-cyan-600 active:text-white col-start-3 row-start-2' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'%'))}}>%</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-cyan-600 hover:text-cyan-500 active:bg-cyan-600 active:text-white col-start-4 row-start-2' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'÷'))}}>÷</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-cyan-600 hover:text-cyan-500 active:bg-cyan-600 active:text-white col-start-4 row-start-3' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'*'))}}>*</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-cyan-600 hover:text-cyan-500 active:bg-cyan-600 active:text-white col-start-4 row-start-4' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'-'))}}>-</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-cyan-600 hover:text-cyan-500 active:bg-cyan-600 active:text-white col-start-4 row-start-5' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'+'))}}>+</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-cyan-600 hover:text-cyan-500 active:bg-cyan-600 active:text-white col-start-1 row-start-6' disabled={true} onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,'+/-'))}}>+/-</button>
        <button className='rounded-3xl h-full bg-stone-500/10 hover: cursor-pointer text-cyan-600 hover:text-cyan-500 active:bg-cyan-600 active:text-white col-start-3 row-start-6' onClick={()=>{setCalcScreen(addCharOnCalc(CalcScreen,','))}}>,</button>
        <button className='rounded-3xl h-full bg-cyan-600 text-white hover:bg-cyan-700 hover:cursor-pointer active:bg-cyan-800 col-start-4 row-start-6' onClick={()=>{setCalcScreen(calcular(CalcScreen))}}>=</button>
      </div>
    </>
  )
}

function addCharOnCalc(count:string, numberToAdd:string):string{
  if(count == '0' || count == 'NaN' ){
    if(!isNaN(parseInt(numberToAdd))){
      return numberToAdd
    }
    
    
    if (numberToAdd == ','){
      return '0,'
    }

    return '0'
  }

  if(numberToAdd == ','){
    if(count[count.length-1] == '%' && count[count.length-1] != ','){
      return count+'*0,'
    }

    if(isNaN(parseInt(count[count.length-1])) && count[count.length-1] != ','){
      return count+'0,'
    }

    if(isNaN(Number(count.substring(count.length-2, count.length)))){
      return count
    }
  }
  
  if(count[count.length - 1] == '%'){

    if (numberToAdd == '%') {
      return count
    }

    if(!isNaN(Number(numberToAdd))){
      return count+'*'+numberToAdd
    }

    if(isNaN(Number(numberToAdd))){
      return count+numberToAdd
    }
  }

  if (numberToAdd == '%'){
    if(isNaN(Number(count[count.length-1]))){
      return count
    }
  }

  if(numberToAdd != '%' && isNaN(Number(numberToAdd)) && isNaN(Number(count[count.length -1]))){
    return count.substring(0,count.length-1) + numberToAdd
  }

  return count+numberToAdd
}

function calcular(conta:string): string {

  try{
    return String(eval(conta.replaceAll('÷','/').replaceAll(',','.').replaceAll('%','/100'))).replaceAll('.',',')
  }catch(error){
    return 'error'
  }
}