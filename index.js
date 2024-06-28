/*
Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/



class Funko {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    describe() {
        return `${this.name} numbered ${this.number}.`;

    }
}

class Theme {
    constructor(name) {
        this.name = name;
        this.funkos = [];
    }

    addfunko(funko) {
        if (funko instanceof Funko) {
            this.funkos.push(funko);
        } else {
            throw new Error(`You can only add an instance of Funko. Argument is not a funko: ${funko}`);

        }
    }

    describe() {
        return `${this.name} has ${this.funkos.length} funkos.`;
     }
}

class Menu {
    constructor() {
        this.themes = [];
        this.selectedTheme = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
           switch (selection) {
            case '1':
                this.createTheme();
                break;
            case '2':
                this.viewTheme();
                break;
            case '3':
                this.deleteTheme();
                break;
            case '4':
                this.displayThemes();
                break;
            default:
                selection = 0;
           }
        selection = this.showMainMenuOptions();
        }
    alert('Goodbye!');
    }

showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new theme
    2) view theme
    3) delete theme
    4) display all themes
    `);
}

showThemeMenuOptions(themeInfo) {
    return prompt(`
    0) back
    1) add funko
    2) delete funko
    ------------------------
    ${themeInfo}
    `);
}

displayThemes() {
    let themeString = '';
    for (let i = 0; i < this.themes.length; i++) {
        themeString += i + ') ' + this.themes[i].name + '\n';
    }
    alert(themeString);
}

createTheme() {
    let name = prompt('Enter name for new theme:');
    this.themes.push(new Theme(name));
}

viewTheme() {
    let index = prompt('Enter the index of the theme you wish to view:');
    if (index > -1 && index < this.themes.length) {
        this.selectedTheme = this.themes[index];
        let description = 'Theme Name: ' + this.selectedTheme.name + '\n';
        
        for (let i =0; i < this.selectedTheme.funkos.length; i++) {
            description += i + ') ' + this.selectedTheme.funkos[i].name 
            + ' - ' + this.selectedTheme.funkos[i].number + '\n';
        }

        let selection = this.showThemeMenuOptions(description);
        switch (selection) {
            case '1':
                this.createFunko();
                break;
            case '2':
                this.deleteFunko();
        }
    }
}

deleteTheme() {
    let index = prompt('Enter the index of the theme you wish to delete:');
    if (index > -1 && index < this.themes.length) {
        this.themes.splice(index, 1);
    }
}
createFunko() {
    let name = prompt('Enter name for new funko:');
    let number = prompt('Enter number for new funko:');
    this.selectedTheme.funkos.push(new Funko(name, number));
}

deleteFunko() {
    let index = prompt('Enter the index of funko you wish to delete:');
    if (index > -1 && index < this.selectedTheme.funkos.length) {
        this.selectedTheme.funkos.splice(index, 1);
    }
}
}

let menu = new Menu();
menu.start()