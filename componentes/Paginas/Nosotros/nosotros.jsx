import info from './nosotros.module.css'


const Nosotros = () => {
  return (
    <>
      {/* historia de la empresa */}
      <div className={info.caja}>
        <p>
          Historia de la Empresa - Comercio Electrónico "BrewHub" (Recién Comenzado):
          "BrewHub es el fruto de una pasión compartida por la cerveza artesanal y el deseo de hacer que la elaboración casera de cerveza sea más accesible para todos. Lo que comenzó como un sueño en un garaje se ha convertido en una tienda en línea dedicada a proporcionar a los entusiastas de la cerveza los mejores insumos cerveceros a precios asequibles.

          Nuestro fundador, Alex, un apasionado cervecero casero, se dio cuenta de que encontrar ingredientes de calidad para su cerveza no siempre era fácil ni económico. Inspirado por su propia experiencia, decidió crear BrewHub con el objetivo de ofrecer una amplia gama de ingredientes de alta calidad, desde lúpulos frescos hasta maltas selectas y levaduras premium, todo a solo un clic de distancia.

          Aunque somos nuevos en el mercado, nuestra dedicación a la calidad, la frescura y el servicio excepcional nos impulsa todos los días. Estamos comprometidos en ayudar a cerveceros caseros, desde los principiantes hasta los más experimentados, a crear cervezas excepcionales y a disfrutar del proceso.

          En BrewHub, creemos que la pasión por la cerveza artesanal debería ser compartida por todos, y estamos emocionados de ser parte de tu viaje cervecero. Bienvenido a BrewHub, donde la cerveza comienza".

          Esta historia destaca el inicio de la empresa, la pasión de su fundador y su compromiso con la calidad y la accesibilidad en la elaboración casera de cerveza. Puede ayudar a establecer una conexión con los clientes al transmitir la autenticidad y la dedicación de la empresa.
        </p>
      </div>
      {/* politicas de tienda  */}
      <div className={info.caja}>
        <p>
          1. Envío y Entrega:

          Plazos de Entrega: Nuestros pedidos estándar generalmente se entregan en un plazo de 3 a 7 días hábiles, dependiendo de la ubicación del cliente. Para envíos exprés, ofrecemos opciones de entrega de 1 a 3 días hábiles.

          Costos de Envío: Ofrecemos envío gratuito en pedidos superiores a $50. Para pedidos menores a $50, los costos de envío varían según la ubicación y el tamaño del pedido. Los detalles de los costos se muestran en el proceso de compra antes de confirmar el pedido.

          Seguimiento de Pedidos: Cada cliente recibirá un número de seguimiento una vez que se envíe su pedido. Esto les permitirá rastrear su paquete en tiempo real y recibir actualizaciones por correo electrónico sobre el estado de entrega.

          2. Devoluciones y Reembolsos:

          Política de Devolución: Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del pedido. Los productos deben estar en su estado original y sin abrir para ser elegibles para la devolución.

          Proceso de Devolución: Para iniciar una devolución, los clientes pueden ponerse en contacto con nuestro servicio de atención al cliente a través de nuestro formulario de contacto en línea o por correo electrónico. Una vez aprobada la devolución, proporcionaremos instrucciones para la devolución y procesaremos un reembolso o cambio según lo solicitado.

          Reembolsos y Cambios: Ofrecemos reembolsos completos para productos devueltos en condiciones adecuadas. También ofrecemos la opción de cambiar el producto por uno diferente si el cliente prefiere esta opción. Los reembolsos se procesan en un plazo de 7 días hábiles después de recibir el producto devuelto.

          3. Garantía de Calidad:

          Calidad de los Productos: Nos comprometemos a ofrecer insumos cerveceros de la más alta calidad. Trabajamos directamente con proveedores de renombre y realizamos pruebas regulares de calidad para garantizar la frescura y consistencia de nuestros productos.

          Productos Defectuosos: Si un producto llega defectuoso o dañado, lo reemplazaremos sin costo adicional para el cliente. Solicitamos a los clientes que nos informen de cualquier problema de calidad dentro de los 7 días posteriores a la recepción del pedido.

          4. Atención al Cliente:

          Horario de Atención al Cliente: Nuestro equipo de atención al cliente está disponible de lunes a viernes, de 9:00 a 17:00, hora local. Los clientes pueden ponerse en contacto con nosotros a través de nuestro número de teléfono de atención al cliente o nuestro correo electrónico de soporte.

          Métodos de Contacto: Para consultas generales o problemas con los pedidos, los clientes pueden llamarnos al [número de teléfono] o enviarnos un correo electrónico a [dirección de correo electrónico]. También ofrecemos asistencia en vivo a través de nuestro chat en línea durante las horas de atención al cliente.</p>
      </div>
      {/* historias de clientes */}
      <div className={info.caja}>
        <p>Cliente Satisfecho 1 - Cervecería "BrewMasters":
          "Desde que comenzamos a comprar nuestros insumos cerveceros en BrewMasters, nuestra calidad de cerveza ha mejorado significativamente. Sus productos de alta calidad y su servicio excepcional nos han convertido en clientes leales".</p>
      </div>
      <div className={info.caja}>
        <p>
          Cliente Satisfecho 2 - Microcervecería "HopCrafters":
          "HopCrafters es nuestro proveedor de confianza para lúpulos y maltas. La frescura y variedad de sus ingredientes nos permiten experimentar con nuevas recetas de cerveza constantemente. ¡No podríamos estar más contentos con ellos!"
        </p>
      </div>
      <div className={info.caja}>
        <p>
          Cliente Satisfecho 4 - Cervecería Artesanal "CraftHaven":
          "CraftHaven no solo ofrece una amplia gama de insumos de alta calidad, sino que también brindan un servicio de atención al cliente excepcional. Siempre están dispuestos a resolver nuestras preguntas y necesidades".
        </p>
      </div>
      <div className={info.caja}>
        <p>
          Cliente Satisfecho 6 - Cerveceros Novatos "BrewBeginners":
          "Como cerveceros novatos, nos sentimos afortunados de haber encontrado BrewBeginners. Sus kits de inicio y consejos nos han facilitado mucho el proceso de elaboración de cerveza. ¡Gracias por hacer que nuestra aventura cervecera sea tan divertida!"
        </p>
      </div>
      <div className={info.caja}>
        <p>
          Cliente Satisfecho 5 - Cervecería Experimental "FlavorCrafters":
          "FlavorCrafters ha sido un socio esencial en nuestra búsqueda de sabores únicos. Sus extractos y especias han agregado una dimensión completamente nueva a nuestras cervezas experimentales. ¡Son simplemente geniales!"
        </p>
      </div>
    </>
  );
};

export default Nosotros