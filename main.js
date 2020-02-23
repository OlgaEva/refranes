

const refranesArr = [
"¿A quién le amarga un dulce?",
"A caballo regalao no se le mira el colmillo.",
"A cada santo le llega su día.",
"A cada cerdo le llega su Noche Buena.",
"A Dios rogando y con el mazo dando.",
"A grandes males, grandes remedios.",
"A la larga todo se sabe.",
"A la mala hora no ladra el perro.",
"A la tercera va la vencida.",
"A la tierra que fueres haz lo que vieres.",
"A lo hecho pecho.",
"A otro perro con ese hueso.",
"A palabras necias oídos sordos.",
"A quien Dios no le da hijos, el diablo le da sobrinos.",
"A río revuelto, ganancia de pescadores.",
"A veces sale más caro el collar que el perro.",
"Agua pasada no mueve molino.",
"Agua que no has de beber, déjala correr.",
"Aguja sabe lo que cose.",
"Ahí sí hay mucha tela de donde cortar.",
"Al buen entendedor con pocas palabras basta.",
"Al mal tiempo buena cara.",
"Al mejor cazador se la va la liebre.",
"Al pan pan y al vino vino.",
"Al que a buen árbol se arrima, buena sombra lo cobija.",
"Al que Dios se lo da, San Pedro se lo bendiga.",
"Al que le caiga el sello que se lo ponga.",
"Al son que le tocan, le baila.",
"Alábate pollo que mañana te guisan.",
"Allá ellos que son blancos y se entienden.",
"Amigo en la adversidad es un amigo de verdad.",
"Amigo es un peso en el bolsillo.",
"Amor con amor se paga.",
"Arbol que crece 'doblao' jamás su tronco endereza.",
"Aterriza que no hay tocón.",
"Barco grande, ande o no ande.",
"Barriga llena, corazón contento.",
"Borrón y cuenta nueva.",
"Buenas cuentas, conservan amistades.",
"Caballo viejo se vende lejos.",
"Cada cual a lo suyo."
]
// 	42.	Cada cual arrima la sardina a su braza.
// 	43.	Cada cual sabe de la pata que cojea.
// 	44.	Cada cual sabe donde le aprieta el zapato.
// 	45.	Cada cual se reparte con la cuchara grande.
// 	46.	Cada cual siente sus males y Dios siente los de todos.
// 	47.	Cada gallina a su gallinero.
// 	48.	Cada guaraguao tiene su pitirre.
// 	49.	Cada loco con su tema.
// 	50.	Calma piojo que el peine llega.
// 	51.	Camarón que se duerme se lo lleva la corriente.
// 	52.	Camino malo se anda ligero.
// 	53.	Caridad contra caridad no es caridad.
// 	54.	Como quiera que te pongas tienes que llorar.
// 	55.	Con amigos así no hacen falta enemigos.
// 	56.	Con la vara que midas te mediran.
// 	57.	Con la boca es un mamey.
// 	58.	Cría cuervos y te sacarán los ojos.
// 	59.	Cría fama y acuéstate a dormir.
// 	60.	Cuando el río suena es porque agua trae.
// 	61.	Cuando hay hambre, no hay pan duro.
// 	62.	Cuando la pobreza entra por la puerta, el amor sale por la ventana.
// 	63.	Cuándo no es pascuas en diciembre?
// 	64.	Cuando no está preso lo andan buscando.
// 	65.	Cuando se está hundiendo el barco salen todas las ratas.
// 	66.	Cuenta el milagro pero no digas el santo.
// 	67.	De cualquier maya sale un ratón.
// 	68.	De la esperanza vive el cautivo.
// 	69.	De mi maíz ni un grano.
// 	70.	De noche todos los gatos son prietos.
// 	71.	De poetas, tontos y locos, todos tenemos un poco.
// 	72.	De que vale una jaula de oro, si el pajaro siempre esta solo.
// 	73.	De tal palo tal astilla.
// 	74.	Del agua fría el gato escaldado huye.
// 	75.	Del agua mansa libreme Dios que de la brava me libro yo.
// 	76.	Del árbol caído todos hacen leña.
// 	77.	Del dicho al hecho hay un gran trecho.
// 	78.	Desde que se hicieron las excusas nadie queda mal.
// 	79.	Después de la tormenta viene la calma.
// 	80.	Después del relámpago viene el trueno.
// 	81.	Después del gusto viene el disgusto.
// 	82.	Díme con quien andas y te diré quién eres.
// 	83.	Dios aprieta pero no ahoga.
// 	84.	Dios castiga sin vara y sin fuete.
// 	85.	Dios da y quita.
// 	86.	Dios dice ayúdate que yo te ayudaré.
// 	87.	Dios los cría y ellos se juntan.
// 	88.	Dios no se queda con nada de nadie.
// 	89.	Dios sabe lo que hace.
// 	90.	Donde comen dos comen tres.
// 	91.	Donde hubo fuego cenizas quedan.
// 	92.	Donde manda capitán no manda marinero.
// 	93.	Donde pone el ojo, pone la bala.
// 	94.	Donde reina la mujer, el diablo es primer ministro.
// 	95.	Dos cabezas piensan mejor que una.
// 	96.	El amor lo perdona todo.
// 	97.	El amor no se compra con dinero.
// 	98.	El amor y el interés se fueron al campo un día y más pudo el interés que el amor que te tenía.
// 	99.	El cerdo siempre busca el fango.
// 	100.	El dinero llama al dinero.
// 	101.	El hábito no hace al monje
// 	102.	El hombre es como el oso, mientras más feo más hermoso.
// 	103.	El hombre propone y Dios dispone.
// 	104.	El infierno está lleno de buenas intenciones.
// 	105.	El ladrón juzga por su condición.
// 	106.	El matrimonio es como el flamboyán, empieza con flores y termina con bainas.
// 	107.	El mismo perro con otro collar.
// 	108.	El mono sabe el palo al que trepa.
// 	109.	El muerto al frente y la gritería detrás.
// 	110.	El muerto al hoyo y el vivo al pimpollo.
// 	111.	El ocio es la madre de todos los vicios.
// 	112.	El ojo del amo engorda al caballo.
// 	113.	El papel aguanta todo lo que le pongan.
// 	114.	El pajaro se conoce por la chureta.
// 	115.	El perfume bueno viene en potes pequeños.
// 	116.	El pez grande se come al chiquito.
// 	117.	El pez muere por la boca.
// 	118.	El pudor de la doncella la hace aparecer mas bella.
// 	119.	El que a hierro mata a hierro muere.
// 	120.	El que busca en yaguas viejas encuentra cucarachas.
// 	121.	El que busca encuentra.
// 	122.	El que calla otorga.
// 	123.	El que da lo que tiene a pedir se atiene.
// 	124.	El que da primero da dos veces.
// 	125.	El que espera desespera.
// 	126.	El que guarda siempre encuentra.
// 	127.	El que hizo la ley hizo la trampa.
// 	128.	El que juega con fuego se quema.
// 	129.	El que juega por necesidad pierde por obligación.
// 	130.	El que la hace la paga.
// 	131.	El que mal anda mal acaba.
// 	132.	El que mucho abarca poco aprieta.
// 	133.	El que nace para vellón nunca llega a la peceta
// 	134.	El que nació pa' toro del cielo le caen los cuernos.
// 	135.	El que no aprende es porque no quiere.
// 	136.	El que no habla Dios no lo oye.
// 	137.	El que no la hace a la entrada la hace en la salida.
// 	138.	El que no llora no mama.
// 	139.	El que no oye consejos no llega a viejo.
// 	140.	El que no quiere caldo le dan tres tazas.
// 	141.	El que no tiene dinga tiene mandinga.
// 	142.	El que no tiene hechas no tiene sospechas.
// 	143.	El que no tiene para más, con su mujer se acuesta.
// 	144.	El que presta no mejora.
// 	145.	El que quiere pescado que se moje los pies.
// 	146.	El que se alegre del mal de su vecino, el suyo le viene de camino.
// 	147.	EL que se acuesta con  perros, con pulgas se levanta.
// 	148.	El que se brinda se sobra.
// 	149.	El que se casa, para su casa.
// 	150.	El que se coma la carne que se coma también el hueso.
// 	151.	El que se mete a redentor sale crucificado.
// 	152.	El que se pica es porque ajo come.
// 	153.	El que se va no hace falta.
// 	154.	El que se va para Aguadilla pierde su silla. Y el que de Aguadilla viene su silla tiene.
// 	155.	El que siembra espinas que no espere cosechar flores.
// 	156.	El que siembra vientos cosecha tempestades.
// 	157.	El que siembra, cosecha.
// 	158.	El que tiene nariz que no mande a oler.
// 	159.	El que tiene padrino se bautiza.
// 	160.	El que tiene tienda que la atienda, o si no que la venda.
// 	161.	El que venga atrás que arregle.
// 	162.	El que vive de ilusiones muere de desengaños.
// 	163.	El remedio fue peor que la enfermedad.
// 	164.	El sol sale para todos.
// 	165.	El tiempo lo cura todo.
// 	166.	El trabajo no mata a nadie.
// 	167.	El último que ríe, ríe mejor.
// 	168.	El vago trabaja doble.
// 	169.	En boca cerrada no entran moscas.
// 	170.	En casa de herrero cuchillo de palo.
// 	171.	En cualquier sitio se cuecen habas.
// 	172.	En el país de los ciegos el tuerto es rey.
// 	173.	En guerra avisada no muere gente.
// 	174.	En la boca del embustero lo cierto se hace dudoso.
// 	175.	En la unión está la fuerza.
// 	176.	En la vida todo tiene remedio, menos la muerte.
// 	177.	Entran por arrimaos y quieren salir por dueños.
// 	178.	Entre col y col una lechuga.
// 	179.	Eramos muchos y parió la abuela.
// 	180.	Eres como el yagrumo, que tiene dos caras.
// 	181.	Eres como santo Tomas, ver para creer
// 	182.	Es como buscar una aguja en un pajar.
// 	183.	Es como el perro del hortelero, que ni come ni deja comer.
// 	184.	Es más vago que la quijá de arriba.
// 	185.	Es mejor malo conocido que bueno por conocer.
// 	186.	Es mejor precaver que tener que remediar.
// 	187.	Es un peligro estar vivo.
// 	188.	Escoba nueva barre bien.
// 	189.	Ese baila al son que le toquen.
// 	190.	Ese no es santo de mi devoción.
// 	191.	Eso es como llover sobre mojado.
// 	192.	Eso es desvestir un santo para vestir a otro.
// 	193.	Eso es harina de otro costal.
// 	194.	Eso es meterse en camisa de once varas.
// 	195.	Eso no te lo despinta nadie.
// 	196.	Eso pasa en las mejores familias.
// 	197.	Eso son otros veinte pesos.
// 	198.	Está como la reina mora que a veces canta y a veces llora.
// 	199.	Está más jalao que el timbre de la guagua.
// 	200.	Está mas perdido que una cucaracha en un baile de gallinas.
// 	201.	Está soñando con pajaritos preñao.
// 	202.	Estás en la procesión y también quieres tocar las campanas.
// 	203.	Estás entre la espada y la pared.
// 	204.	Estás más perdío que un juey bizco.
// 	205.	Estás probando tu propia medicina.
// 	206.	Estás trabajando para el inglés.
// 	207.	Esto ya se está pasando de castaño a oscuro.
// 	208.	Estoy como sapo en letrina.
// 	209.	Estoy mas pelao, que un chucho.
// 	210.	Formó una tormenta en un vaso de agua.
// 	211.	Grano a grano la gallina llena el buche.
// 	212.	Hablando del rey de Roma y la nariz que asoma.
// 	213.	Hablando la gente se entiende.
// 	214.	Hablaste por boca de santo.
// 	215.	Hay de todo en la viña del Señor.
// 	216.	Hay gustos que merecen palos.
// 	217.	Hay mucho que ganar y poco que perder.
// 	218.	Hay muchos caciques y pocos indios.
// 	219.	Hay que arar con los bueyes que se tenga.
// 	220.	Hay que coger al toro por los cuernos.
// 	221.	Hay que dar del ala para comer de la pechuga.
// 	222.	Hay que dar para recibir.
// 	223.	Hay que darle el beneficio de la duda.
// 	224.	Hay que darle tiempo al tiempo.
// 	225.	Hay que estirar el pies hasta donde llegue la sábana.
// 	226.	Hay que hacer de tripas corazones.
// 	227.	Hay que leerle la cartilla.
// 	228.	Hay que llevar dos sacos, uno para llevar y otro para recibir.
// 	229.	Hay que tener los pantalones en su sitio.
// 	230.	Hay que ver para creer.
// 	231.	Haz bien sin mirar a quién.
// 	232.	Hijo de gato, caza ratón.
// 	233.	Hijos casados, trabajo doble.
// 	234.	Hombre casado, burro domado.
// 	235.	Hombre precavido vale por dos.
// 	236.	Hoy por ti, mañana por mi.
// 	237.	Huye del peligro y no caerás en él
// 	238.	Juntos pero no revueltos.
// 	239.	La agonía es larga pero la muerte es segura.
// 	240.	La ausencia causa olvido.
// 	241.	La caridad empieza por casa.
// 	242.	La codicia rompe el saco.
// 	243.	La confianza mató a su amo.
// 	244.	La costumbre es la ley.
// 	245.	La cuestión no es llegar, sino quedarse.
// 	246.	La curiosidad mató al gato.
// 	247.	La envidia es una mala consejera.
// 	248.	La fe mueve montañas.
// 	249.	La fiebre no está en la sábana.
// 	250.	La gallina vieja da buen cardo.
// 	251.	La ignorancia es atrevida.
// 	252.	La juventud del viejo está en el bolsillo.
// 	253.	La ley entra por la casa.
// 	254.	La luna no es de queso ni se come con melao.
// 	255.	La luz de a'lante es la que alumbra.
// 	256.	La mona, aunque se vista de seda, mona se queda.
// 	257.	La muerte es lo único seguro que tenemos en la vida.
// 	258.	La muerte no escoge.
// 	259.	La mujer y la guitarra para tocarlas hay que templarlas.
// 	260.	La práctica hace al maestro.
// 	261.	La práctica hace milagros.
// 	262.	La ropa sucia se lava en casa.
// 	263.	La soga siempre parte por lo más finito.
// 	264.	La suerte de la fea la bonita la desea.
// 	265.	La suerte es de quien la tiene.
// 	266.	La verdad, aunque severa, es amiga verdadera.
// 	267.	Ladrón que roba a ladrón, tiene mil años de perdon
// 	268.	Las apariencias engañan.
// 	269.	Las cosas caen por su propio peso.
// 	270.	Las cosas se toman según de quien vengan.
// 	271.	Las desgracias no vienen solas.
// 	272.	Las estrellas te aconsejan pero no te obligan.
// 	273.	Le debe a cada santo una vela.
// 	274.	Le dieron gato por liebre.
// 	275.	Le espantaron el ángel de la guarda.
// 	276.	Le estas buscando los tres pies al gato y te van a salir los cuatro.
// 	277.	Le pide permiso a un pie antes de mover el otro.
// 	278.	Le puso el dedo en la llaga.
// 	279.	Le sacan punta a una bola de billar.
// 	280.	Llegó el momento de la verdad
// 	281.	Lo bueno dura poco.
// 	282.	Lo cortés no quita lo valiente.
// 	283.	Lo dices y no lo sabes.
// 	284.	Lo fácil se pierde ligero.
// 	285.	Lo mejor que hizo Dios fue un día detrás del otro.
// 	286.	Lo poquito agrada, lo mucho enfada.
// 	287.	Lo prometido es deuda.
// 	288.	Lo que bien se aprende nunca se olvida.
// 	289.	Lo que dejes para después, para después se queda.
// 	290.	Lo que está por pasar pasará.
// 	291.	Lo que no conviene no viene.
// 	292.	Lo que no mata engorda.
// 	293.	Lo que no pasa en cien años pasa en un día.
// 	294.	Lo que se da no se quita.
// 	295.	Lo robado no luce.
// 	296.	Lo último que se pierde es la esperanza.
// 	297.	Los cuernos y las canas no salen por la vejez.
// 	298.	Madre es la que cría, no la que pare
// 	299.	Mañana será otro día.
// 	300.	Martes, ni te cases ni te embarques, ni de tu familia te apartes.
// 	301.	Más claro no canta un gallo.
// 	302.	Más sabe el diablo por viejo que por diablo.
// 	303.	Más vale algo que nada.
// 	304.	Más vale cobarde vivo que héroe muerto.
// 	305.	Más vale estar solo que mal acompañado.
// 	306.	Más vale la maña que fuerza.
// 	307.	Más vale pájaro en mano que cientos volando.
// 	308.	Más vale pálido una vez que cientas colorado.
// 	309.	Más vale poco y bien ganado que mucho pero enfangado.
// 	310.	Más vale tarde que nunca.
// 	311.	Más vale un hoy que dos mañanas.
// 	312.	Más vale un por si acaso que un lo pensaré.
// 	313.	Más viejo es el viento y aún sopla.
// 	314.	Me estoy comiendo un cable.
// 	315.	Me gustaría hacer todo lo que hizo el muerto, menos morirme.
// 	316.	Me viene como anillo al dedo.
// 	317.	Métete a mono y pierde el rabo.
// 	318.	Mientras el hacha va y viene descansa el palo.
// 	319.	Mientras haya vida hay esperanza.
// 	320.	Mientras menos perros menos pulgas.
// 	321.	Moro viejo, mal cristiano.
// 	322.	Muchos cocineros dañan la comida.
// 	323.	Muerto ¿quieres misa?
// 	324.	Mujer preparada vale por dos.
// 	325.	Músico pagado no toca bien.
// 	326.	Nada puede dar quien nada tiene.
// 	327.	Nadie aprende por cabeza ajena.
// 	328.	Nadie da nada a cambio de nada.
// 	329.	Nadie es profeta en su tierra.
// 	330.	Nadie escarmienta con cabeza ajena.
// 	331.	Nadie está por nadie.
// 	332.	Nadie sabe lo que hay en la olla más que la cuchara que la mueve.
// 	333.	Nadie sabe lo que tiene hasta que lo pierde.
// 	334.	No cantes victoria antes de tiempo.
// 	335.	No cruces el puente antes de llegar a él.
// 	336.	No da un tajo ni en defensa propia.
// 	337.	No dejes para mañana lo que puedas hacer hoy.
// 	338.	No eches más leña al fuego.
// 	339.	No ensucies el agua para después tomártela.
// 	340.	No es lo mismo con violín que con guitarra.
// 	341.	No es lo mismo decirlo que hacerlo.
// 	342.	No es lo mismo llamar al diablo que verlo venir.
// 	343.	No es lo mismo ni se escribe igual.
// 	344.	No es tan fiero el león como lo pintan.
// 	345.	No gusgues, si quieres ser jusgado.
// 	346.	No hables por boca ajena.
// 	347.	No hagas hoy a nadie lo que no quisieras que te hicieran a ti mañana.
// 	348.	No hay mal que dure cien años ni cuerpo que lo resista.
// 	349.	No hay mal que por bien no venga.
// 	350.	No hay mejor palabra que la que no se dice.
// 	351.	No hay peor ciego que el que no quiere ver.
// 	352.	No hay peor cuña que la del mismo palo.
// 	353.	No hay peor gestión que la que no se hace.
// 	354.	No hay que ser caballo para saber de carreras.
// 	355.	No hay regla sin excepción.
// 	356.	No hay rosas sin espinas.
// 	357.	No le busques las cinco patas al gato.
// 	358.	No le mires la espiga en el ojo ajeno, sin ver la que hay en el tuyo.
// 	359.	No lo salvan ni las once mil vírgenes.
// 	360.	No mates la gallina de los huevos de oro.
// 	361.	No mates el mensajero que te da mala noticia.
// 	362.	No por mucho madrugar amanece más temprano.
// 	363.	No prenda la estufa si no va a cocinar.
// 	364.	No puedes tapar el cielo con la mano.
// 	365.	No se pierde ni un bautismo de muñeca.
// 	366.	No sólo hay que ser bueno sino demostrarlo.
// 	367.	No son todos los que están, ni están todos los que son.
// 	368.	No sufras por calenturas ajenas.
// 	369.	No te duermas en las pajas.
// 	370.	No tires piedras al vecino si tu techo es de cristal.
// 	371.	No todo el que llora, de pena llora.
// 	372.	No todo lo que brilla es oro.
// 	373.	No todo lo que guinda se cae.
// 	374.	No van lejos los de adelante si los de atrás corren bien.
// 	375.	Nunca es tarde si la dicha es buena.
// 	376.	Obra con amores y no con buenas razones.
// 	377.	Ojo por ojo y diente por diente.
// 	378.	Ojos que no ven corazón que no siente.
// 	379.	Ojos que te vieron ir, ojos que no te volverán a ver.
// 	380.	Olvídate, más se perdió en la guerra.
// 	381.	Pa' lo que falta que venga el resto.
// 	382.	Pa' la leche que da la vaca, que se la beba el becerro
// 	383.	Paga para que te acrediten.
// 	384.	Pagan justos por pecadores.
// 	385.	Palos si boga y palos si no bogas.
// 	386.	Para atrás ni para cojer impulso.
// 	387.	Para dos que se quieren bien, con uno que coma basta.
// 	388.	Para el gusto se hicieron los colores.
// 	389.	Para muestra con un botón basta.
// 	390.	Para nadar hay que tirarse al agua.
// 	391.	Para que falte que sobre.
// 	392.	Para que se pierda que me haga daño.
// 	393.	Pasó la prueba de fuego.
// 	394.	Pesa mas que un matrimonio mal llevao.
// 	395.	Perro flaco soñando con longaniza.
// 	396.	Perro que ladra no muerde.
// 	397.	Por las vísperas se sacan los días de fiesta.
// 	398.	Por plata baila el mono.
// 	399.	Predicar la moral en calzoncillos.
// 	400.	Preguntando se llega a Roma.
// 	401.	Probando es como se guisa.
// 	402.	Pueblo pequeño, campana grande.
// 	403.	Que tu mano izquierda no sepa lo que hace la derecha.
// 	404.	Que curvas y yo sin freno.
// 	405.	Quien anda mal, acaba mal.
// 	406.	Quien bien empieza bien acaba.
// 	407.	Quien bien te quiere te hará llorar.
// 	408.	Quién le pone el cascabel al gato?
// 	409.	Quien lo hereda no lo hurta.
// 	410.	Quien más mira menos ve.
// 	411.	Quien te dio velas en este entierro.
// 	412.	Quien te raspó que te pinte.
// 	413.	Quiere estar con Dios y con el diablo.
// 	414.	Quiere ser mas Papita que el Papa.
// 	415.	Quieren ganar indulgencias con escapulario ajeno.
// 	416.	Rabijunco en tierra, tormenta en el mar.
// 	417.	Recoge tus gallinas que voy a soltar mi gallo.
// 	418.	Recordar es vivir.
// 	419.	Roma no se hizo en un día.
// 	420.	Sale más caro el candil que la vela.
// 	421.	Salió más caro el fuete que el caballo.
// 	422.	Salir del trueno para caer en el relámpago.
// 	423.	Saliste de Guatemala y te metiste en Guatapeor.
// 	424.	Sarna con gusto no pica.
// 	425.	Se acuerdan de Santa Bárbara cuando truena.
// 	426.	Se ahoga en un vaso de agua.
// 	427.	Se casan más moscas con miel que con vinagre.
// 	428.	Se come para vivir, no se vive para comer.
// 	429.	Se defiende más que un gato boca arriba.
// 	430.	Se deja caer para que lo carguen.
// 	431.	Se está ahorcando con su propia soga.
// 	432.	Se hace lo que se puede.
// 	433.	Se juntó el hambre con las ganas de comer.
// 	434.	Se le fueron los hunos a la cabeza.
// 	435.	Se metió en la boca del lobo.
// 	436.	Se quedó sin la soga y sin la cabra.
// 	437.	Se sacaron los trapitos al sol.
// 	438.	Se toca con los ojos y se mira con las manos.
// 	439.	Según es el bejuco así debe ser la batata.
// 	440.	Según es el pájaro así es el nido.
// 	441.	Ser jíbaro es cosa mala.
// 	442.	Si como caminas, cosinas. Yo me como hasta el pegao.
// 	443.	Si la montaña no viene a Mahoma, Mahoma va a la montaña.
// 	444.	Si no es Juan es Pedro.
// 	445.	Si te molesta el calor, no te metas a la cocina.
// 	446.	Siempre habla quien menos puede.
// 	447.	Sobre los gustos no hay nada escrito.
// 	448.	Sobre mi cabeza la mantilla.
// 	449.	Son como dos jueyes machos en la misma cueva.
// 	450.	Son como el aceite y el vinagre.
// 	451.	Son muchos los hijos del muerto.
// 	452.	Soñar no cuesta nada.
// 	453.	Tal para cual.
// 	454.	Tan bonita la dentadura y tan mala la pronunciación.
// 	455.	Tan linda la jaula y tan feo el pichón.
// 	456.	Tanto está la gotera sobre la piedra hasta que hace el roto.
// 	457.	Tanto fue el cántaro a la fuente hasta que por fin se rompió.
// 	458.	Tanto nadar para morir en la orilla.
// 	459.	Tanto tiempo en el campo y no conoces la malojilla
// 	460.	Te doy pon y quieres guiar.
// 	461.	Te doy un dedo y me quieres coger el brazo.
// 	462.	Te doy una pulgada y quieres la yalda entera.
// 	463.	Te estás curando en salud.
// 	464.	Te mató el pollo en las manos.
// 	465.	Tiene el sartén por el mango.
// 	466.	Tiene más vida que un gato.
// 	467.	Tiras la piedra y escondes la mano.
// 	468.	Toda carrera tiene su fin.
// 	469.	Todo depende del color del cristal con que se mire.
// 	470.	Todo el mundo es generoso dando lo que no es de ellos.
// 	471.	Todo en exceso hace daño.
// 	472.	Todo lo prieto no es morcilla.
// 	473.	Todo lo que sube tiene que bajar.
// 	474.	Todo los días se tira un bobo a la calle.
// 	475.	Todo tiempo pasado fue mejor.
// 	476.	Todos somos hijos de Dios.
// 	477.	Tragando aunque sea saliva.
// 	478.	Tu quieres que el león me coma.
// 	479.	Un clavo saca a otro clavo
// 	480.	Un mal con un bien se apaga.
// 	481.	Una manzana podrida daña el barril completo.
// 	482.	Una sola golondrina no hace verano.
// 	483.	Una sonrisa no cuesta nada pero vale mucho.
// 	484.	Uno no sabe para quien trabaja.
// 	485.	Unos nacen con estrellas y otros nacen estrellados.
// 	486.	Va para atrás como el cangrejo.
// 	487.	Vale más de lo que pesas en oro.
// 	488.	Vale más el rabo que el volantín.
// 	489.	Vale más muerto que vivo.
// 	490.	Vayan las verdes por las maduras.
// 	491.	Vete con la música a otra parte.
// 	492.	Vísteme despacio que voy de prisa.
// 	493.	Voy a hacer como Blás, que comió y ya se va.
// 	494.	Ya los pájaros le tiran a la escopeta.
// 	495.	Zapatero a su zapato.

// "]