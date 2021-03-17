$(document).ready(function () {
    console.log('seue');

    // oggetto che descriva uno studente
        // nome, cognome, età
        var studente = {
            'nome': 'Pasquale',
            'cognome': 'Santana',
            'età': 36,
        };
        // stampare con for-in tutte le proprietà dell'oggetto
        for (var key in studente) {
            console.log(studente[key]);
        }

    // creare un array di oggetti di studenti
    var classe = [
        {
            nome: 'Pasquale',
            cognome: 'Santana',
            eta: 36,
        },
        {
            nome: 'Antonio',
            cognome: 'Fusco',
            eta: 25,
        },
        {
            nome: 'Andrea',
            cognome: 'Angelino',
            eta: 12,
        },
    ];
    
        // ciclare su tutti gli studenti e stampare per ognuno di essi nome, cognome ed età
        for(i = 0; i < classe.length; i++) {
            
            $('#classe').append("<h2>" + (i + 1) + "° studente: " + classe[i].nome + ' ' + classe[i].cognome + "</h2>");
        }

        $('#classe').children().addClass('mt-20')

        
    // l'utente deve poter aggiungere un nuovo oggetto studente
        // inserire tramite form nome, cognome ed età
    $('#btn').click(function () { 

        var nome = $('#nome').val();
        var cognome = $('#cognome').val();
        var eta = parseInt($('#eta').val());

        var studente = {
            nome: nome,
            cognome: cognome,
            eta: eta,
        }

        classe.push(studente);
        console.log(classe);

        $('#classe').empty();
        $('#nome').val('');
        $('#cognome').val('');
        $('#eta').val('');

        for(i = 0; i < classe.length; i++) {
            // console.log((i + 1) + "° studente: " + classe[i].nome + ' ' + classe[i].cognome);
            $('#classe').append("<h2>" + (i + 1) + "° studente: " + classe[i].nome + ' ' + classe[i].cognome + "</h2>");
            $('#classe').children().addClass('mt-20')

        }



        
    });

    
        
    

});