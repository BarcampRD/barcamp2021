const submissions = [
    {
        "name": "Luis Contreras",
        "bio": "Senior IT Infrastructure Monitoring Engineer with an expertise in Monitoring solutions like (Nagios, Centreon, Icinga, Op5, and Zabbix). He has a proven experience in System / Network Administration, and developing monitoring projects, including complex integrations and developing plugins in Python, PHP, and PowerShell. His experience is based in the Retail, Government, Health, and IT Services industries. Participation in small observability projects using Grafana and Prometheus. Also, participating in PoC for SIEM Wazuh.",
        "avatar": "img/speakers/luis_contreras.png",
        "country": "R.D.",
        "talk": {
            "schedule": "9:15 AM",
            "title": "Wazuh - La plataforma de seguridad Opensource",
            "abstract": "Contar con una plataforma de seguridad en estos días tiene un costo elevado, pero Wazuh vino para que las empresas sin importar su tamaño o rubro puedan sacar el mayor partido a una solución de seguridad en la cual cuenta con diferentes módulos.",
            "description": "",
            "format": "Talk (40 minutes)",
            "audience_level": "All"
        },
        "tags": [
            "open source",
			"Docker",
			"kubernetes",
			"Cloud",
			"security",
			"siem",
			"security",
			"cybersecurity"
        ],
        "socials": [
            {
                "icon": "fab fa-twitter",
                "name": "Twitter",
                "link": "https://twitter.com/doluiscontreras"
            }
        ],
        "status": "accepted",
        "confirmed": true
    },
    {
        "name": "David Gomez Garcia",
		"avatar": "https://secure.gravatar.com/avatar/fd19c10b5cee3106900062c521f5d600?s=500",
		"Country": "España",
		"bio": "Java Champion, Developer Advocate @Liferay_es\r\n\r\nIngeniero Técnico en Informática de Sistemas por la UPM, David lleva más de 20 años dedicado al desarrollo de software y ha participado en proyectos para Banca, Defensa, Servicios y Transporte marítimo y terrestre. Desde hace dos años, David desarrolla su labor como Developer Advocate en Liferay.\r\n\r\nAdemás de como desarrollador, David realiza labores habituales de formación, ha sido Instructor Certificado para Spring Source y actualmente imparte los cursos avanzados de Java de JavaSpecialists en Español.\r\n\r\nEn los últimos 10 años, también ha estado involucrado de forma habitual y constante con varias comunidades tecnológicas de desarrollo, eventos y conferencias como ponente y organizador. Actualmente es uno de los co-organizadores del grupo de usuarios de Java en Madrid, del grupo de usuarios de Liferay y también es parte del comité técnico de Lambda World en Cádiz.\r\n\r\nHa sido ponente en conferencias como OpenExpo Europe 2019, Open Source Lisbon 2019, T3chFest (2014, 2016), JBCNConf (2015, 2016, 2017, 2018), Codemotion Madrid (2012, 2019), Codemotion Milan (2016), Voxxed Days Zürich (2016), OpenSouthCode (2017), Spring I/O (2011, 2012 2015), Liferay DEVCON (2018), Software Crafters Barcelona (2018). También ha dado charlas en varias comunidades locales como MadridJUG, MálagaJUG, CastellónJUG \\u0026 deCharlas.com, MilanJUG, ValenciaJUG, VigoJUG, BarcelonaJUG, comunidad hispana de JUGs, MadridJS, Hackathon Lovers… ",

        "talk": {
            "schedule": "10:00 AM",
            "title": "Construyendo Monolitos modulares que puedan escalar a Microservicios (solo si lo necesitan)",
            "abstract": "¿Son los microservicios un objetivo o una consecuencia?\n\nEn esta charla nos centraremos más en cómo técnicas de como DDD, CQRS o Event-Sourcing que nos permitirán diseñar nuestro monolito de forma modular, y estar preparados para escalar a microservicios facilmente (sólo si lo necesitamos).",
            "description": "Es fácil en estos días caer en la tentación de comenzar a diseñar toda su aplicación con una arquitectura de micro servicios ... \r\nPorque, ya sabes, eso es lo que todo el mundo hace, ¿verdad? \r\n\r\nPero... ¿Estamos son los microservicios un objetivo en sí o un medio para lograr un propósito? En esta charla pensaremos en un enfoque diferente: volveremos a la base y veremos cómo siguiendo las prácticas DDD, CQRS y Event-Sourcing nos permitirá diseñar y evolucionar nuestra aplicación conmenzando por un monolito pero dotándole de la capacidad de escalar a microservicios cuando (y sólo si) lo necesitamos.",
            "format": "Talk (40 minutes)",
            "audience_level": "All"
        },
        "tags": [
            "Arquitectura",
			"microservicios",
			"DDD",
			"CQRS",
			"Event-Sourcing"
        ],
        "socials": [
            {
                "icon": "fab fa-twitter",
                "name": "Twitter",
                "link": "http://twitter.com/dgomezg"
            },
            {
                "icon": "fab fa-github-alt",
                "name": "GitHub",
                "link": "https://github.com/dgomezg"
            }
        ],
        "status": "accepted",
        "confirmed": false
    },
    {
        "name": "Dewan Ahmed",
		"avatar": "img/speakers/dewan_ahmed.jpg",
		"country": "Moncton, Canada",
		"bio": "👋🏽 Hello! I’m Dewan - a Developer Advocate at Red Hat focusing on cloud-native projects. Before starting at Red Hat, I have worked at IBM for six years as a developer, QA lead, consultant, and developer advocate. And even before that, I was a renewable energy engineer designing solar homes for off-grid parts of Bangladesh.\r\n\r\nI believe in the power of community and actively work with the local and virtual communities (OpenShift, K8s, CNCF to name a few). \r\n\r\nBesides work, I offer career coaching to students, newgrads, and professionals who are trying to transition to the software industry. When I’m not working, I spend quality time with my family and play 🎱.",
        "talk": {
            "schedule": "10:45 AM",
            "title": "Deploy N applications to N clusters using Argo CD ApplicationSet",
            "abstract": "As the scaling needs grow, you have to deploy your application to more than one Kubernetes cluster. This talk covers open source tools Argo CD + ApplicationSets that allow you to manage deployments of a large number of applications, repositories, or clusters, all from a single Kubernetes resource.",
    		"description": "As the scaling needs grow, you have to deploy your application to more than one Kubernetes cluster. How about deploying multiple applications across multiple clusters? This talk covers Argo CD + ApplicationSets that allow you to manage deployments of a large number of applications, repositories, or clusters, all from a single Kubernetes resource.\r\n\r\nStarting with a brief introduction to GitOps and Argo CD, you will learn about the challenges of having to use new manifest files every time you want to deploy to another cluster. With Argo CD's Application resource, users are limited to deploying from a single Git repository to a single cluster/namespace. In contrast, you'll learn in this talk, the ApplicationSet resource uses templates, and automated generation of template parameters, to allow you to manage many Argo CD Applications simultaneously from multiple Git repositories. The demo will feature OpenShift GitOps which bundles Argo CD, ApplicationSets and other tools, to enable teams to implement GitOps workflows for cluster configuration and application delivery. Although some knowledge about Kubernetes and GitOps will help, the demo will explain the concepts in action. ApplicationSets Generator demos will show how your applications can be deployed and managed across single/multiple clusters from one or more Git repositories.\r\n\r\nYou will leave the talk with the necessary resources and knowledge on Argo CD, ApplicationSets and OpenShift GitOps, and learn how these tools can help you manage large numbers of applications through templating and automation.",
            "format": "Talk (40 minutes)",
            "audience_level": "Intermediate"
        },
        "tags": [
            "open source",
            "kubernetes",
            "argocd"
        ],
        "socials": [
            {
                "icon": "fab fa-twitter",
                "name": "Twitter",
                "link": "http://twitter.com/DewanAhmed"
            },
            {
                "icon": "fab fa-linkedin",
                "name": "LinkedIn",
                "link": "https://www.linkedin.com/in/diahmed/"
            }
        ],
        "status": "accepted",
        "confirmed": true
    },
    {
        "name": "Oscar J Rodriguez",
		"avatar": "img/speakers/oscar_rodriguez.jpeg",
		"country": "Unknown",
		"bio": "+ Industrial Electronics Associate\r\n+ Telematics Engineer\r\n+ Linux Lover\r\n+ Sysadmin\r\n+ Security student\r\n+ Maker",
        "talk": {
            "schedule": "11:30 AM",
            "title": "El BlockChain Explicado",
            "abstract": "El blockchain esta por todas partes, todos hablan de como mejora la economia o como puede mejorar otras areas de nuestra vida pero muchos no desarrolladores jovenes no tienen la mas minima idea de como funciona el concepto y por donde empezar a aprenderlo, esta charla esta para ellos, sin palabreos.",
            "description": "# El BlockChain Explicado\r\n\r\n## Ya sabemos que son importantes los blockchains\r\n\r\nTodos hemos escuchado la palabra una y otra vez y estamos concientes de que existen\r\npero la verdad muy pocos tienen una idea clara de como funciona y porque en realidad\r\nson tan importantes como parece ser, algo que a mi mismo como desarrollador se me\r\nhizo muy incómodo cuando quise investigar sobre blockchain\r\n\r\n## Que es toda esta jerga\r\n\r\nCada vez que intentas investifar que es el blockchain verás a alguien mostrarte\r\nun monton de dibujitos acompanado de palabras un poco avanzadas sobre el tema en\r\ncuestion que te dejan con más dudas que respuestas a la pregunta de que es él\r\nblockchain, por lo que en esta charla vamos a llevarte del cero absoluto.\r\n\r\n## Que voy a saber cuando termine esta charla?\r\n\r\n+ Vas a saber por qué unos dicen que es virtualmente imposible hackear un blockchain\r\npara que áreas específicas puede ser útil y para que otras en podría no serlo.\r\n + Vas a aprender donde puedes empezar a estudiar para convertirte en un blockchain\r\n developer\r\n + Vas a saber exactamente como funciona un blockchain genérico y también una idea\r\n de como funciona el más famoso blockchain de todos (bitcoin).\r\n\r\n## Como se hará la charla?\r\n\r\nEsta charla se hará alrededor de una demostración interactiva forkeada del proyecto de\r\nsofware de código libre alojado en [Ander96](https://github.com/anders94/blockchain-demo).\r\n\r\nEn este demostración se va parte por parte desde el explicar como funciona un hash\r\nhasta como funciona un ledger distribuido basado en cadenas de bloques, además de\r\nuna breve explicación del código de bitcoin y de otros cryptoproyectos explicados\r\nde forma general.",
            "format": "Talk (40 minutes)",
            "audience_level": "All"
        },
        "tags": [
			"open source",
			"blockchain",
			"software development",
			"begginer",
			"Cloud"
		],
        "socials": [
            {
                "icon": "fab fa-twitter",
                "name": "Twitter",
                "link": "http://twitter.com/Black_Cloud08"
            },
            {
                "icon": "fab fa-github-alt",
                "name": "GitHub",
                "link": "https://github.com/josuer08"
            }
        ],
        "status": "accepted",
        "confirmed": false
    },
    {
        "name": "Ronald Vargas Quesada",
		"avatar": "https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/68321/yo_explicando.jpg",
		"country": "Costa Rica",
		"bio": "Ronald Vargas Quesada, nace en la ciudad de Cartago, Costa Rica, un 03 de setiembre de 1968. Es Oracle ACE Director del Programa Oracle ACE de Oracle Corporation y actualmente es Arquitecto de Datos de Grupo Financiero Improsa y anteriormente a esto en los últimos 5 años, laboró como Gerente de Desarrollo de Negocios en Crux Consultores y Consultor para NOVACOMP S.A. \r\nRonald tiene más de 30 años involucrado con tecnologías Oracle. \r\nDurante su carrera profesional ha laborado para Partners de Oracle como consultor en más de un centenar de proyectos para el sector público y privado en la región LAD.\r\nHa sido instructor de Oracle University y Academy desde el 2000, así como Profesor Universitario en la ULACIT. \r\nFundador de los OUG de Costa Rica 2010, Guatemala 2011, Panamá 2013, El Salvador 2014. Ronald es el responsable de introducir el OTN TOUR en la región Centroamericana.\r\nEditor y Autor del blog oracledbacr.blogspot.com desde el 2009. Ha sido expositor presencial en México, Guatemala, Honduras, Nicaragua, Panamá, Colombia, Ecuador, Chile, Perú, Argentina, Costa Rica. También ha particado en eventos virtuales a lo largo de toda la región LATAM y España.\r\nHa escrito varios artículos técnicos para Oracle Technology Network en español. Ha realizado procesos de evangelización en temas de computación cognitiva, mediante la utilización de la tecnología, tanto en charlas como en aportes a diarios nacionales como La República, Revista SUMMA y ITNow. En noviembre de 2017 fue asignado por el Programa Oracle ACE, como Oracle Cloud Advocate, por un período de 12 meses. En  abril del 2018, su perfil y experiencia, es publicado en la revista Oracle Magazine, de cobertura mundial, convirtiéndose así en el primer Costarricense y el segundo Centroamericano en formar parte de la revista en sus 30 años de existencia.\r\nhttps://www.larepublica.net/noticia/bancos-detectaran-ilicitos-mediante-computacion-cognitiva\r\nhttp://www.revistasumma.com/empresa-costarricense-crea-solucion-cognitiva-para-detectar-lavado-de-activos-y-financiamiento-del-terrorismo/\r\nhttps://www.larepublica.net/noticia/costa-rica-se-llena-de-apps-inteligentes\r\nA la fecha Ronald ha participado en varios centenares de charlas, dirigidas a Canales de Oracle, clientes, Entidades Educativas, Universidades, Eventos de actualización tecnológicas en empresas, etc; en temas tan diversos como:\r\n• Computación Cognitiva\r\n• Hackeo Ético\r\n• Integración\r\n• Alta Disponibilidad y Contingencia\r\n• Escalabilidad\r\n• Seguridad\r\n• Migración\r\n• Infraestructura\r\n• Rendimiento y Administración de Base de Datos\r\n• Inteligencia de Negocios\r\n• Respaldos y Recuperación\r\n• Capa Intermedia\r\n• Cloud Computing\r\nEn la actualidad, brinda talleres virtuales sobre temas de Oracle Cloud, Gestión de Base de Datos, Seguridad, Mejora de Rendimiento, además de ser consultor externo para varias companías en la región LATAM.",
        "talk": {
            "schedule": "12:15 AM",
            "title": "Oracle Database Ethical Hacking para base de datos 19c y 21c",
            "abstract": "Durante años hemos hablado de seguridad, tanto en la capa de la base de datos, como en la capa intermedia. Pero que sabemos de esas puertas trazeras que tiene el software. Cómo nos pueden atacar dentro de la organización sin darnos cuenta? Como puede el DBA abusar de sus privilegios.?",
            "description": "Durante 30 años he trabajado como consultor en el área de DBA. He sido instructor en más de 200 cursos de Oracle Academy y he dado charlas en más de 12 países de LATAM y España. El tema de seguridad es una caja negra, requiere mucho tiempo de análisis y estudio y por supuesto de conocimiento. A lo largo de los años, he buscado esas exposiciones y vulnerabilidades que están poco documentadas o del todo no lo están. Mi idea es que exista conocimiento sobre ellas y como monitorear las mismas, para evitar el abuso de privilegios otorgados. Cómo lo digo en el texto de la charla: sabemos de esas puertas trazeras que tiene el motor de la base de datos?. Cómo los ataques pueden tener su origen dentro de la organización sin darnos cuenta? Como puede el DBA abusar de sus privilegios.?. Mi charla es una demo producto de las investigaciones y documentaciones realizadas sobre estos temas TABU en la seguridad de la base de datos.",
            "format": "Talk (40 minutes)",
            "audience_level": "All"
        },
		"tags": [
			"oracle",
            "database",
            "19c",
            "seguridad",
            "ethical",
            "hacking",
            "nube"
		],
        "socials": [
            {
                "icon": "fab fa-twitter",
                "name": "Twitter",
                "link": "https://twitter.com/rovaque"
            },
            {
                "icon": "fas fa-link",
                "name": "Instagram",
                "link": "https://www.instagram.com/juandiii_/"
            },
        ],
        "status": "accepted",
        "confirmed": false
    },
    {
        "name": "Raldy De Oleo",
		"avatar": "https://secure.gravatar.com/avatar/6477b13892d8411e464c947a258b9ff1?s=500",
		"country": "Unknown",
		"bio": "Im a software developer with more than 5 years of experience working for big local companies developing C# enterprise solutions. I studied at UASD, Santiago de los caballeros, ITLA, and a Videogame, AR/VR Certification at t-ecogroup.",
        "talk": {
            "schedule": "1:00 PM",
            "title": "Videogame development with Unity, C# and Blender",
            "abstract": "Learn quickly how to get into videogames development getting advantage of your c# skills and the power of Unity plus 3D Modeling with Blender. Fast building of an multiplatform mobil, AR/VR or pc videogame or application.",
            "description": "Learn quickly how to get into videogames development getting advantage of your c# skills and the power of Unity plus 3D Modeling with Blender. Fast building of an multiplatform mobil, AR/VR or pc videogame or application.",
            "format": "Talk (40 minutes)",
            "audience_level": "All"
        },
		"tags": [
			"c#",
			"Unity",
			"Blender",
			"Videogames",
			"AR",
			"VR"
		],
        "socials": [
            {
                "icon": "fab fa-twitter",
                "name": "Twitter",
                "link": "https://twitter.com/printek_sa"
            },
            {
                "icon": "fas fa-link",
                "name": "Link",
                "link": "http://sistekrd.com/web/sistek"
            }
        ],
        "status": "accepted",
        "confirmed": false
    },
    {
		"name": "Fernando Paulino",
        "avatar": "https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/50211/pp.jpeg",
		"country": "R.D.",
		"bio": "\r\nVisionary of user experience and technology. Digital banking experience, Technology products specialist, Product owner / Product manager, Quality control, Requirements and user experience, from a sub banking agent, ATM, Internet banking, to mobile banking and the core. Certification of requirements with users.-SQA of projects of continuous improvement and innovation. -QA of the first Dominican financial chatbot",

        "talk": {
            "schedule": "1:45 PM",
            "title": "De proyecto a producto",
            "abstract": "Llevar a comprender que un proyecto no solo termina siendo un entregable constante, sino que este se convierte en un entregable variable abierto a nuevos usuarios y experiencias multi-niveles, segun el usuario que lo utiliza, todos como tech advocates responsables de la experiencia.",
            "description": "En esta charla se tiene como objetivo conocer los siguientes puntos sobre un APP desde sus inicios:\r\n\r\n1-Fases y evolucion de una idea a proyecto con la finalidad de convertirse en producto.\r\n2- Compromiso de calidad y valor en cada entregable.\r\n3- Comprendiendo la importancia de la experiencia de usuario.\r\n",
            "format": "Talk (40 minutes)",
            "audience_level": "All"
        },
		"tags": [
			"Products",
			"APPS",
			"UX"
		],
        "socials": [
            {
                "icon": "fab fa-twitter",
                "name": "Twitter",
                "link": "https://twitter.com/Paulino"
            },
        ],
        "status": "waitlist",
        "confirmed": false,
    },
    {
        "name": "Marco Schulz",
		"avatar": "https://secure.gravatar.com/avatar/c59c6666e76977dde33948515fdb3a90?s=500",
		"country": "Mexico",
		"bio": "Marco Schulz studied at HS Merseburg, Germany, computer science and holds an engineers degree in software engineering. He tweets as @ElmarDott regularly about several technical topics. The main topics in his field of work are Build and Configuration Management, Software Architecture and Release Management. About more than 15 years he is working in different large Web Application projects all over the world. He is an independent consultant / trainer. To share his knowledge he gives talks on conferences, if he is not writing on a new article about software engineering.",
        "talk": {
            "schedule": "2:30 PM",
            "title": "API4Future - A journey how to create a stable API",
	    	"abstract": "API Changes always are very risky activities and need a good planning to not crash a project. Because this could cost a lot of adjustments and work for API consumers. In this talk I will share my experience how to prevent common problems designing APIs.",
		    "description": "By experience, enterprise applications have a long lifetime period. This is one oft the reasons why we need to pay a lot of attention for maintenance. But how we are able to avoid chaos in the project? With some Code Examples in Java I will demonstrate how a stable API get developed. Some questions I will answer in this talk:\r\n• Quality and Maintenance \r\n• Architecture \\u0026 Design Pattern for APIs \r\n• API Documentation \\u0026 Versioning",
            "format": "Talk (40 minutes)",
            "audience_level": "All"
        },
        "tags": [
			"Java",
			"API",
			"Design Pattern",
			"Architecture",
			"Documentation"
		],
        "socials": [
            {
                "icon": "fab fa-twitter",
                "name": "Twitter",
                "link": "https://twitter.com/ElmarDott"
            },
            {
                "icon": "fas fa-link",
                "name": "Link",
                "link": "https://elmar-dott.com",
            }
        ],
        "status": "accepted",
        "confirmed": true
    }
];
