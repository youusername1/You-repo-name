module.exports = { 
	// Vous pouvez personnaliser la langue ici ou directement dans les fichiers de commandes 
	onlyadminbox: { 
		description: "activer/désactiver seul le groupe d'administrateur peut utiliser le bot", 
		guide: " {pn} [on | off]", 
		text: { 
			turnedOn: "Mode activé, seul l'administrateur du groupe peut utiliser le bot", 
			turnedOff: "Mode désactivé, seul l'administrateur du groupe peut utiliser le bot", 
			syntaxError: "Erreur de syntaxe, utilisez uniquement {pn} activé ou {pn} désactivé" 
		} 
	}, 
	adduser: { 
		description: "Ajouter un utilisateur à votre boîte de discussion", 
		guide: " {pn} [lien profil | uid]", 
		text: { 
			alreadyInGroup: "Déjà dans le groupe", 
			successAdd: "- Ajout réussi de %1 membres au groupe", 
			failedAdd: "- Échec de l'ajout de %1 membres au groupe", 
			approve: "- Ajout de %1 membres à la liste d'approbation", 
			invalidLink: "Veuillez saisir un lien Facebook valide", 
			cannotGetUid: "Impossible d'obtenir l'uid de ceci utilisateur", 
			linkNotExist: "Cette URL de profil n'existe pas", 
			cannotAddUser: "Le bot est bloqué ou cet utilisateur a empêché des inconnus d'ajouter au groupe" 
		} 
	}, 
	admin: { 
		description: "Ajouter, supprimer, modifier le rôle d'administrateur", 
		guide: " {pn} [add | -a] <uid>: Ajouter le rôle d'administrateur pour l'utilisateur\n\t {pn} [remove | -r] <uid>: Supprimer le rôle d'administrateur de l'utilisateur\n\t {pn} [list | -l]: Lister tous les administrateurs", 
		text: { 
			added: "âœ… | Rôle d'administrateur ajouté pour %1 utilisateurs:\n%2", 
			alreadyAdmin: "\nâš ï¸ | %1 utilisateurs ont déjà le rôle d'administrateur:\n%2", 
			missingIdAdd: "âš ï¸ | Veuillez saisir l'ID ou l'identifiant de l'utilisateur pour ajouter le rôle d'administrateur", 
			removed: "âœ… | Rôle d'administrateur supprimé pour %1 utilisateurs:\n%2", 
			notAdmin: "âš ï¸ | %1 utilisateurs n'ont pas le rôle d'administrateur :\n%2", 
			missingIdRemove: "âš ï¸ | Veuillez saisir un identifiant ou identifier l'utilisateur pour supprimer le rôle d'administrateur", 
			listAdmin: "ðŸ'' | Liste des administrateurs :\n%1" 
		} 
	}, 
	adminonly: { 
		description: "activer/désactiver le bot uniquement pour l'administrateur", 
		guide: "{pn} [on | off]", 
		text: { 
			turnedOn: "Mode bot uniquement pour l'administrateur activé", 
			turnedOff: "Mode bot uniquement pour l'administrateur désactivé", 
			syntaxError: "Erreur de syntaxe, utilisez uniquement {pn} activé ou {pn} désactivé" 
		} 
	}, 
	all: { 
		description: "Tag tous les membres de votre groupe de discussion", 
		guide: "{pn} [content | empty]" 
	}, 
	anime:{ 
		description: "image d'anime aléatoire", 
		guide: "{pn} <endpoint>\n Liste des endpoints : neko, kitsune, câlin, caresse, waifu, pleurer, baiser, gifler, suffisant, frapper", 
		texte: { 
			chargement: "Initialisation de l'image, veuillez patienter...",
			error: "Une erreur s'est produite, veuillez réessayer plus tard" 
		} 
	}, 
	antichangeinfobox: { 
		description: "Activer/désactiver la boîte d'informations anti-changement", 
		guide: " {pn} avt [on | off]: boîte de dialogue anti-changement d'avatar\n {pn} name [on | off]: boîte de dialogue anti-changement de nom\n {pn} theme [on | off]: boîte de dialogue anti-changement de thème (chá»§ Ä'á» )\n {pn} emoji [on | off]: boîte de dialogue anti-changement d'emoji", 
		text: { 
			antiChangeAvatarOn: "Activer la boîte de dialogue anti-changement d'avatar", 
			antiChangeAvatarOff: "Désactiver la boîte de dialogue anti-changement d'avatar", 
			missingAvt: "Vous n'avez pas défini d'avatar pour la boîte de dialogue", 
			antiChangeNameOn: "Activer la boîte de dialogue anti-changement de nom", antiChangeNameOff 
			: "Désactiver la boîte de dialogue anti-changement de nom", 
			antiChangeThemeOn: "Activer la boîte de dialogue anti-changement de thème", 
			antiChangeThemeOff: "Désactiver la boîte de dialogue anti-changement de thème", 
			antiChangeEmojiOn: "Activer le chat anti-changement d'emoji", 
			antiChangeEmojiOff: "Désactiver le chat anti-changement d'emoji", 
			antiChangeAvatarAlreadyOn: "Votre chat est actuellement en mode anti-changement d'avatar", 
			antiChangeNameAlreadyOn: "Votre chat est actuellement en mode anti-changement de nom", 
			antiChangeThemeAlreadyOn: "Votre chat est actuellement en mode anti-changement de thème", 
			antiChangeEmojiAlreadyOn: "Votre chat est actuellement en mode anti-changement d'emoji" 
		} 
	}, 
	appstore: { 
		description: "Rechercher une application sur l'Appstore", 
		text: { 
			missingKeyword: "Vous n'avez saisi aucun mot-clé", 
			noResult: "Aucun résultat trouvé pour le mot-clé %1" 
		} 
	}, 
	autosetname: { 
		description: "Changement automatique du pseudo du nouveau membre", 
		guide: " {pn} set <nickname>: permet de configurer le changement automatique du pseudo, avec quelques raccourcis :\n + {userName} : nom du nouveau membre\n + {userID} : identifiant du membre\n Exemple :\n {pn} set {userName} ðŸš€\n\n {pn} [on | off] : utiliser pour activer/désactiver cette fonctionnalité\n\n {pn} [view | info] : afficher la configuration actuelle", 
		texte : { 
			missingConfig : "Veuillez saisir la configuration requise", 
			configSuccess : "La configuration a été définie avec succès", 
			currentConfig : "La configuration autoSetName actuelle dans votre groupe de discussion est :\n%1", 
			notSetConfig : "Votre groupe n'a pas défini la configuration autoSetName", 
			syntaxError : "Erreur de syntaxe, seuls \"{pn} on\" ou \"{pn} off\" peuvent être utilisés", 
			turnOnSuccess : "La fonctionnalité autoSetName a été activée",
			turnOffSuccess : « La fonctionnalité autoSetName a été désactivée », 
			erreur : « Une erreur s'est produite lors de l'utilisation de la fonctionnalité autoSetName. Essayez de désactiver la fonctionnalité de lien d'invitation dans le groupe et réessayez plus tard
		»
	}, 
	avatar : { 
		description : "créer un avatar d'anime avec signature", 
		guide : "{p}{n} <identifiant ou nom du personnage> | <texte d'arrière-plan> | <signature> | <nom de la couleur d'arrière-plan ou couleur hexadécimale>\n{p}{n} help : voir comment utiliser cette commande", 
		text : { 
			initImage : "Initialisation de l'image, veuillez patienter...", 
			invalidCharacter : "Il n'y a actuellement que %1 caractères sur le système, veuillez saisir un identifiant de personnage inférieur à", 
			notFoundCharacter : "Aucun personnage nommé %1 n'a été trouvé dans la liste des personnages", 
			errorGetCharacter : "Une erreur s'est produite lors de l'obtention des données du personnage :\n%1 : %2", 
			success : "âœ… Votre avatar\nPersonnage : %1\nID : %2\nTexte d'arrière-plan : %3\nSignature : %4\nCouleur : %5", 
			defaultColor : "par défaut", 
			error : "Une erreur s'est produite\n%1 : %2" 
		} 
	}, 
	badwords : { 
		description : "Tourner activer/désactiver/ajouter/supprimer l'avertissement de gros mots, si un membre enfreint, il sera averti, la deuxième fois, il sera expulsé de la boîte de discussion", 
		guide: " {pn} add <words>: ajouter des mots interdits (vous pouvez ajouter plusieurs mots séparés par des virgules \",\" ou des barres verticales \"|\")\n {pn} delete <words>: supprimer des mots interdits (vous pouvez supprimer plusieurs mots séparés par des virgules \",\" ou des barres verticales \"|\")\n {pn} list <hide | laisser vide>: désactiver l'avertissement (ajouter \"hide\" pour masquer les mots interdits)\n {pn} unwarn [<userID> | <@tag>]: supprimer 1 avertissement d'un membre\n {pn} on: désactiver l'avertissement\n {pn} off: activer l'avertissement", 
		text: { 
			onText: "on", 
			offText: "off", 
			onlyAdmin: "âš ï¸ | Seuls les administrateurs peuvent ajouter des mots interdits à la liste", 
			missingWords: "âš ï¸ | Vous n'avez pas saisi les mots interdits", 
			addedSuccess: "âœ… | %1 mots interdits ajoutés à la liste", 
			alreadyExist: "â Œ | %1 mots interdits existent déjà dans la liste avant : %2", 
			tooShort: "âš ï¸ | %1 mots interdits ne peuvent pas être ajoutés à la liste car ils font moins de 2 caractères : %2", 
			onlyAdmin2: "âš ï¸ | Seuls les administrateurs peuvent supprimer les mots interdits de la liste", 
			missingWords2: "âš ï¸ | Vous n'avez pas saisi les mots à supprimer", 
			deletedSuccess: "âœ… | %1 mots interdits supprimés de la liste", 
			notExist: "â Œ | %1 mots interdits n'existent pas dans la liste avant : %2", 
			emptyList: "âš ï¸ | La liste des mots interdits dans votre groupe est actuellement vide", 
			badWordsList: "ðŸ“' | La liste des mots interdits dans votre groupe : %1",
			onlyAdmin3: "âš ï¸ | Seuls les administrateurs peuvent %1 cette fonctionnalité", 
			turnedOnOrOff: "âœ… | L'avertissement concernant les mots interdits a été %1", 
			onlyAdmin4: "âš ï¸ | Seuls les administrateurs peuvent supprimer l'avertissement concernant les mots interdits", 
			missingTarget: "âš ï¸ | Vous n'avez pas saisi d'ID utilisateur ni d'utilisateur tagué",
			notWarned: "âš ï¸ | L'utilisateur %1 n'a pas été averti pour des mots interdits", 
			removedWarn: "âœ… | L'utilisateur %1 | %2 a été supprimé 1 avertissement de mots interdits", 
			warned: "âš ï¸ | Des mots interdits \"%1\" ont été détectés dans votre message, si vous continuez à les enfreindre, vous serez expulsé du groupe.", 
			warn2: "âš ï¸ | Des mots interdits \"%1\" ont été détectés dans votre message, vous avez enfreint 2 fois et serez expulsé du groupe.", 
			needAdmin: "Le bot a besoin des privilèges d'administrateur pour expulser les membres bannis", 
			unwarned: "âœ… | Avertissement de mots interdits supprimé de l'utilisateur %1 | %2" 
		} 
	}, 
	balance: { 
		description: "voir votre argent ou celui de la personne taguée", 
		guide: " {pn}: voir votre argent\n {pn} <@tag>: voir l'argent de la personne taguée", 
		text: { 
			money: "Vous avez %1$", 
			moneyOf: "%1 a %2$" 
		} 
	}, 
	batslap: { 
		description: "Image Batslap", 
		text: { 
			noTag: "Vous devez taguer la personne que vous souhaitez gifler" 
		} 
	}, 
	busy: { 
		description: "activer le mode Ne pas déranger, lorsque vous êtes tagué, le bot vous avertira", 
		guide: " {pn} [empty | <reason>]: activer le mode Ne pas déranger\n {pn} off: désactiver le mode Ne pas déranger", 
		text: { 
			turnedOff: "âœ… | Le mode Ne pas déranger a été désactivé", 
			turnedOn: "âœ… | Le mode Ne pas déranger a été activé", 
			turnedOnWithReason: "âœ… | Le mode Ne pas déranger a été activé pour la raison : %1", 
			alreadyOn: "L'utilisateur %1 est actuellement occupé", 
			alreadyOnWithReason: "L'utilisateur %1 est actuellement occupé pour la raison : %2" 
		} 
	}, 
	callad: { 
		description: "envoyer un rapport, un commentaire, un bug,... au bot administrateur", 
		guide: " {pn} <message>", 
		text: { 
			missingMessage: "Veuillez saisir le message que vous souhaitez envoyer à l'administrateur", 
			sendByGroup: "\n- Envoyé depuis le groupe : %1\n- ID du fil de discussion : %2", 
			sendByUser: "\n- Envoyé depuis l'utilisateur", 
			content: "\n\nContenu :\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n%1\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\nRépondez à ce message pour envoyer un message à l'utilisateur", 
			success: "Votre message a été envoyé à l'administrateur avec succès !", 
			reply: "ðŸ“ Réponse de l'administrateur %1 :\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n%2\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\nRépondez à ce message pour continuer à envoyer un message à l'administrateur", 
			replySuccess: "Votre réponse à l'administrateur a été envoyée avec succès !",
			feedback: "ðŸ“ Commentaires de l'utilisateur %1 :\n- ID utilisateur : %2%3\n\nContenu :\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n%4\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\nRépondez à ce message pour envoyer un message à l'utilisateur", 
			replyUserSuccess : "Votre réponse à l'utilisateur a été envoyée avec succès !" 
		} 
	}, 
	cmd : { 
		description : "Gérez vos fichiers de commandes", 
		guide : "{pn} load <nom du fichier de commandes>\n{pn} loadAll\n{pn} install <url> <nom du fichier de commandes> : téléchargez et installez un fichier de commandes à partir d'une URL, l'URL est le chemin d'accès au fichier (brut)", 
		text: { 
			missingFileName: "âš ï¸ | Veuillez saisir le nom de la commande que vous souhaitez recharger", 
			loaded: "âœ… | Commande \"%1\" chargée avec succès", 
			loadedError: "â Œ | Échec du chargement de la commande \"%1\" avec erreur\n%2: %3", 
			loadedSuccess: "âœ… | Commande \"%1\" chargée avec succès", 
			loadedFail: "â Œ | Échec du chargement de la commande \"%1\"\n%2", 
			missingCommandNameUnload: "âš ï¸ | Veuillez saisir le nom de la commande que vous souhaitez décharger", 
			unloaded: "âœ… | Commande déchargée \"%1\" avec succès", 
			unloadedError: "â Œ | Échec du déchargement de la commande \"%1\" avec erreur\n%2: %3", 
			missingUrlCodeOrFileName: "âš ï¸ | Veuillez saisir l'URL ou le code et le nom du fichier de commandes que vous souhaitez installer", 
			missingUrlOrCode: "âš ï¸ | Veuillez saisir l'URL ou le code du fichier de commandes que vous souhaitez installer", 
			missingFileNameInstall: "âš ï¸ | Veuillez saisir le nom du fichier pour enregistrer la commande (avec l'extension .js)", 
			invalidUrlOrCode: "âš ï¸ | Impossible d'obtenir le code de commande", 
			alreadExist: "âš ï¸ | Le fichier de commandes existe déjà, êtes-vous sûr de vouloir écraser l'ancien fichier de commandes ?\nRéagissez à ce message pour continuer", 
			installed: "âœ… | Commande \"%1\" installée avec succès, le fichier de commandes est enregistré à %2", 
			installedError: "â Œ | Échec de l'installation de la commande \"%1\" avec erreur\n%2: %3", 
			missingFile: "âš ï¸ | Fichier de commandes \"%1\" introuvable", 
			invalidFileName: "âš ï¸ | Nom de fichier de commande non valide", 
			unloadedFile: "âœ… | Commande déchargée \"%1\"" 
		} 
	}, 
	count: { 
		description: "Afficher le nombre de messages de tous les membres ou de vous-même (depuis que le bot a rejoint le groupe)", 
		guide: " {pn}: utilisé pour afficher le nombre de messages de vous\n {pn} @tag: utilisé pour afficher le nombre de messages des personnes taguées\n {pn} all:utilisé pour afficher le nombre de messages de tous les membres", 
		texte : { 
			count: "Nombre de messages des membres :", 
			endMessage: "Ceux qui n'ont pas de nom dans la liste n'ont envoyé aucun message.", 
			page: "Page [%1/%2]", 
			reply: "Répondez à ce message avec le numéro de page pour en voir plus",
			result: "%1 rank %2 with %3 messages", 
			yourResult: "Vous êtes classé %1 et avez envoyé %2 messages dans ce groupe", 
			invalidPage: "Numéro de page invalide" 
		} 
	}, 
	customrankcard: { 
		description: "Créez votre propre carte de classement", 
		guide: { 
			body: " {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcolor | levelcolor | reset] <value>" 
				+ "\n Dans lequel: " + 
				"\n + maincolor | background <value>: arrière-plan principal de la carte de classement" 
				+ "\n + subcolor <value>: sous-arrière-plan" + " 
				\n + linecolor <value>: couleur de la ligne entre l'arrière-plan principal et le sous-arrière-plan" 
				+ "\n + expbarcolor <value>: couleur de la barre d'affichage" 
				+ "\n + progresscolor <value>: couleur de la barre d'affichage actuelle" 
				+ "\n + alphasubcolor <value>: opacité du sous-arrière-plan (de 0 -> 1)" 
				+ "\n + textcolor <valeur> : couleur du texte (couleur hexadécimale ou RVB)" 
				+ "\n + namecolor <valeur> : couleur du nom" 
				+ "\n + expcolor <valeur> : couleur de l'exp" 
				+ "\n + rankcolor <valeur> : couleur du rang" 
				+ "\n + levelcolor <valeur> : couleur du niveau" 
				+ "\n â€¢ <valeur> peut être une couleur hexadécimale, RVB, RVB, un dégradé (chaque couleur est séparée par un espace) ou l'URL de l'image" 
				+ "\n â€¢ Si vous souhaitez utiliser un dégradé, veuillez saisir plusieurs couleurs séparées par un espace" 
				+ "\n {pn} reset : réinitialiser tout aux valeurs par défaut" 
				+ "\n Exemple :" 
				+ "\n {pn} maincolor #fff000" 
				+ "\n {pn} subcolor rgba(255,136,86,0.4)" 
				+ "\n {pn} reset", 
			pièce jointe : { 
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg`]: "https://i.ibb.co/BZ2Qgs1/image.png", 
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png`]: "https://i.ibb.co/wy1ZHHL/image.png" 
			} 
		}, 
		text: { 
			invalidImage: "URL d'image non valide, veuillez choisir une URL avec une destination d'image (jpg, jpeg, png, gif), vous pouvez télécharger l'image sur https://imgbb.com/ et choisir \"obtenir un lien direct\" pour obtenir l'URL de l'image", 
			invalidAttachment: "Pièce jointe non valide, veuillez choisir un fichier image", 
			invalidColor: "Code couleur non valide, veuillez choisir un code couleur hexadécimal (6 chiffres) ou un code couleur RVB", 
			notSupportImage: "L'URL de l'image n'est pas prise en charge avec l'option \"%1\"",
			success: "Vos modifications ont été enregistrées, voici un aperçu", 
			reseted: "Tous les paramètres ont été réinitialisés aux valeurs par défaut", 
			invalidAlpha: "Veuillez choisir un nombre entre 0 et 1" 
		} 
	}, 
	dhbc: { 
		description: "jouer au jeu attrape le mot",
		guide : "{pn}", 
		texte : { 
			reply : "Veuillez répondre à ce message avec la réponse\n%1", 
			isSong : "Ceci est le nom de la chanson du chanteur %1", 
			notPlayer : "âš ï¸ Vous n'êtes pas le joueur de cette question", 
			correct : "ðŸŽ‰ Félicitations, vous avez répondu correctement et reçu %1$", 
			wrong : "âš ï¸ Vous avez mal répondu" 
		} 
	}, 
	emojimix : { 
		description : "Mélanger 2 emojis ensemble", 
		guide : " {pn} <emoji1> <emoji2>\n Exemple : {pn} ðŸ¤£ ðŸ¥°" 
	}, 
	eval : { 
		description : "Tester le code rapidement", 
		guide : "{pn} <code à tester>", 
		texte : { 
			error : "â Œ Une erreur s'est produite :" 
		} 
	}, 
	event : { 
		description : "Gérer vos fichiers de commandes d'événements", 
		guide : "{pn} load <command nom de fichier>\n{pn} loadAll\n{pn} install <url> <nom du fichier de commande> : Télécharger et charger la commande d'événement, l'URL est le chemin d'accès au fichier de commande (brut)", 
		texte : { 
			missingFileName : "âš ï¸ | Veuillez saisir le nom de la commande que vous souhaitez recharger", 
			loaded : "âœ… | Commande d'événement \"%1\" chargée avec succès", 
			loadedError : "â Œ | La commande d'événement \"%1\" chargée a échoué avec une erreur\n%2 : %3", 
			loadedSuccess : "âœ… | Commande d'événement \"%1\" chargée avec succès", 
			loadedFail : "â Œ | La commande d'événement \"%1\" a échoué\n%2", 
			missingCommandNameUnload : "âš ï¸ | Veuillez saisir le nom de la commande que vous souhaitez décharger", 
			unloaded : "âœ… | Commande d'événement déchargée \"%1\" avec succès", 
			unloadedError : "â Œ | Commande d'événement déchargée \"%1\" Échec avec erreur\n%2 : %3", 
			missingUrlCodeOrFileName : "âš ï¸ | Veuillez saisir l'URL ou le code et le nom du fichier de commandes que vous souhaitez installer", 
			missingUrlOrCode : "âš ï¸ | Veuillez saisir l'URL ou le code du fichier de commandes que vous souhaitez installer", 
			missingFileNameInstall : "âš ï¸ | Veuillez saisir le nom du fichier pour enregistrer la commande (avec l'extension .js)", 
			invalidUrlOrCode : "âš ï¸ | Impossible d'obtenir le code de commande", 
			alreadExist : "âš ï¸ | Le fichier de commandes existe déjà, êtes-vous sûr de vouloir écraser l'ancien fichier de commandes ?\nRéagissez à ce message pour continuer", 
			installed : "âœ… | La commande d'événement « %1 » a été installée avec succès, le fichier de commandes est enregistré à %2", 
			installedError : "â Œ | La commande d'événement « %1 » a échoué avec erreur\n%2 :%3", 
			missingFile: "âš ï¸ | Fichier \"%1\" introuvable", 
			invalidFileName: "âš ï¸ | Nom de fichier invalide", 
			unloadedFile: "âœ… | Commande déchargée \"%1\"" 
		} 
	}, 
	filteruser: { 
		description: "filtrer les membres du groupe par nombre de