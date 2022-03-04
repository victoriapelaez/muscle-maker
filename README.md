[![Netlify Status](https://api.netlify.com/api/v1/badges/f9582bd0-2b4f-4bc5-8bee-ae0c14537f8d/deploy-status)](https://app.netlify.com/sites/unruffled-hodgkin-c0b498/deploys)

# muscle-maker

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Project details

Kanban on GitHub Projects: [muscle-maker project](https://github.com/victoriapelaez/muscle-maker/projects/1)

[Enlace proyecto Netlify](https://unruffled-hodgkin-c0b498.netlify.app/)

#### Principis de UX

- S'ha fet servir una paleta de colors amd dos colors principals primari: #008037 i secondari #f7931e. A més, s'han fet servir els colors de Bootstrap per donar enfasi a determinades parts de la web com ara bottons o enllaços.
- S'ha evitat sobrecarregar la pàgina amb contingut irrellevant i colors estridents.
- Es fan servir descripcions curtes per als links, botons, menus i headings.
- Es fa servir un llenguatge simple i visual i intuitiu per facilitar la comprensió a l'usuari.
- Les imatges són de qualitat.
- L'usuari té la possibilitat de sortir en tot moment de qualsevol situació (com el checkout de la compra).
- Els continguts de la pàgina estan estructurats de manera lògica.
- L'usuari es troba sempre en un entorn conegut, sense la necesitat d'aprendre conceptes o processos.
- Totes les icones i botons tenen un sentit únic.
- La navegació és intuitiva.

### Accessibilitat

- ARIA2: Identifying a required field with the aria-required property
- ARIA8: Using aria-label for link purpose
- ARIA11: Using ARIA landmarks to identify regions of a page
- C15: Using CSS to change the presentation of a user interface component when it receives focus
- C18: Using CSS margin and padding rules instead of spacer images for layout design
- C32: Using media queries and grid CSS to reflow columns
- C41: Creating a focus indicator within the component
- G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text
- G21: Ensuring that users are not trapped in content
- G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence
- G57: Ordering the content in a meaningful sequence
- G59: Placing the interactive elements in an order that follows sequences and relationships within the content
- G82: Providing a text alternative that identifies the purpose of the non-text content
- G88: Providing descriptive titles for Web pages
- G91: Providing link text that describes the purpose of a link
- G95: Providing short text alternatives that provide a brief description of the non-text content
- G115: Using semantic elements to mark up structure
- G126: Providing a list of links to all other Web pages
- G130: Providing descriptive headings
- G131: Providing descriptive labels

#### Ampliacions

Les imatges originals es troben a `/src/assets/original-imgs` i les imatges usades a la web es troben a `/src/assets/resources`.

- S'ha creat un logo pel projecte.
- S'han a fegit imatges als productes de la tenda.
- S'ha afegit una icona de cistella de compra al header que a més mostra el total de productes que conté i permet navegar fins a la pàgina de checkout.
- S'ha afegit un botó de scroll up a les pàgines per tal de millorar la experiència de l'usuari.
- S'ha afegit un botó a les cards de la tenda que permet afegir el producte a la cistella i navegar directament a la pàgina de checkout.
- Els productes que s'afegeixen a la cistella només afegeixen una fila a la taula, després s'augmenta la seva quantitat.
- S'han afegit dos botons a als elements que s'afegeixen a la llista, un per augmentar la quantitat d'aquell producte i un altre per reduir la quantitat.
- Si es resten elements de la cistella fent sevir el botó - (menys) quan la quantitat arriba a 1 i es torna a clicar, s'esborra aquell producte de la cistella.
- S'ha afegit un botó que permet eliminar un determinat producte de la cistella.
- A més del total de la compra es mostra la quantitat total de productes de la cistella.
