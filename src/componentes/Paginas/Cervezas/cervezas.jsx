import Estilos from './cerveza.module.css'

const Cervezas = () => {
  return (
    <div className={Estilos.Ordenando}>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/porter.jfif" alt="fotos-cervezas" />
        <section>
          <h3>Porter</h3>
          Una cerveza marrón de moderada intensidad con un restringido carácter
          tostado y amargor. Puede tener una gama de sabores tostados, generalmente sin
          cualidades quemadas, a menudo con un perfil de maltachocolate-caramelo.
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/stout.jfif" alt="fotos-cervezas" />
        <section>
          <h3>Stout</h3>
          Una cerveza negra con un sabor tostado pronunciado, a menudo similar al
          café. El balance puede variar desde bastante uniforme a bastante amargo, con las
          versiones más balanceadas teniendo un poco de dulzor a malta y las versiones amargas
          siendo bastante secas.
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/indian-pale-ale.jfif" alt="fotos-cervezas" />
        <section>
          <h3>American IPA</h3>
          Ale Americana Pálida (APA) que es amarga y lupulada, con un enfoque en lúpulos
          americanos modernos, presentando un equilibrio hacia el lúpulo y un perfil de
          fermentación limpio que permite que los sabores de lúpulo destaquen.
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/White-ipa.jfif" alt="fotos-cervezas" />
        <section>
          <h3>White IPA</h3>
          Este no es un estilo homologado, nosotros buscamos que tenga las características de una
          IPA americana en cuanto al lupulado, y su vez el color y la sensación en boca de una
          cerveza de trigo. La avena y el trigo ayuda a que el lúpulo se exprese de otra forma que si
          fuera de pura malta no se lograría.
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/indian-pale-ale.jfif" alt="fotos-cervezas" />
        <section>
          <h3>Indian Pale Ale (IPA)</h3>
          Es un estilo de cerveza caracterizado por su amargor y aroma pronunciados de lúpulo.
          Las IPAs presentan un color que va desde el dorado pálido hasta el ámbar y tienen un.
          contenido de alcohol que generalmente varía entre 5.5% y 7.5%
          Su sabor puede incluir notas cítricas, florales y resinosas, con un amargor distintivo.
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/scotch.jfif" alt="fotos-cervezas" />
        <section>
          <h3>Scotch</h3>
          La cerveza Scotch es un estilo cervecero originario de Escocia, conocido por su sabor dulce y robusto,
          con notas de caramelo y toffee. Tiene un alto contenido de alcohol, generalmente entre 6% y 10% ABV,
          y presenta un color que va desde el ámbar oscuro hasta el marrón profundo.
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/American-Amber-Ale.jfif" alt="fotos-cervezas" />
        <section>
          <h3>American Amber Ale (AAA)</h3>
          es un estilo de cerveza caracterizado por su color ámbar profundo y su equilibrio entre maltas y lúpulos.
          Tiene un sabor maltoso con toques de caramelo y un suave amargor, lo que la hace accesible para una amplia
          gama de paladares. Por lo general. Es una cerveza versátil que se adapta bien a diversas ocasiones y maridajes
          de comida,
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/golden.jfif" alt="fotos-cervezas" />
        <section>
          <h3>Golden</h3>
          Es un estilo cervecero que se caracteriza por su color dorado brillante y su sabor equilibrado. Suele tener
          un contenido de alcohol moderado, Las Golden Ales son conocidas por ser cervezas refrescantes y fáciles de beber,
          con sabores maltosos suaves y un amargor sutil del lúpulo
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/honey.jfif" alt="fotos-cervezas" />
        <section>
          <h3>Honey</h3>
          es un estilo que incorpora miel como uno de sus ingredientes clave, lo que le añade un dulzor natural
          y un aroma único. El contenido de miel puede variar, y su sabor puede ir desde sutiles toques de miel
          hasta un dulzor más pronunciado.
        </section>
      </div>
      <div className={Estilos.acomodando}>
        <img className={Estilos.imagen} src="/src/componentes/Paginas/Cervezas/imgCerveza/barley-wine.jfif" alt="fotos-cervezas" />
        <section>
          <h3>Barley Wine</h3>
          Es un estilo robusto y de alta graduación alcohólica, presenta sabores y aromas complejos de maltas tostadas,
          con un amargor equilibrado.Su nombre proviene de su parecido con el vino debido a
          su potencia. Suele envejecer, mejorando con el tiempo,se sirve en pequeñas cantidades.
        </section>
      </div>
    </div>
  );
};

export default Cervezas

