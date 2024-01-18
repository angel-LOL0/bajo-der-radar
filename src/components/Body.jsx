import LinkCard from './LinkCard';

export default function Body() {
  return(
    <>
      <div className=" p-10">
        <h1 className="bg-gradiant-to-r from-orange-500 via-red-500 to-black text-3xl font-bold underline">Bienvenidos a Bajo del radar <br /> donde econtraras Asesinatos, Desapareciones, Criminales <br/> y casos sin resolver o fuera de lo comun</h1>
      </div>
      <div className='p-10 bg-blue-700'>
        <ul className="flex flex-row mx-auto items-center md:ml-auto md:mr-auto flex-wrap text-base justify-center">
          <LinkCard title='Caso #1 Pogo el payaso' body='Hola mundo' />
          <LinkCard title='Caso #1 Pogo el payaso' body='Hola mundo' />
          <LinkCard title='Caso #1 Pogo el payaso' body='Hola mundo' />
          <LinkCard title='Caso #1 Pogo el payaso' body='Hola mundo' />
          <LinkCard title='Caso #1 Pogo el payaso' body='Hola mundo' />
          <LinkCard title='Caso #1 Pogo el payaso' body='Hola mundo' />
          <LinkCard title='Caso #1 Pogo el payaso' body='Hola mundo' />
          <LinkCard title='Caso #1 Pogo el payaso' body='Hola mundo' />
        </ul>  
      </div>
    </>
  )
};
  