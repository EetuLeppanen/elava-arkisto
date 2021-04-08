import csv 
import json 


"""
Tämä skripti lukee annetun csv-tiedoston, hakee siitä halutut ohjelmatiedot ja kirjoittaa ne json-tiedostoon.
Tiedostojen tulee olla samassa kansiossa.
"""


# Csv-tiedosto, jota luetaan
csvFile = r'RARK_exportSample_HaagaHelia.csv'
# Json-tiedosto, johon kirjoitetaan
jsonFile = r'csv_json.json'


"""
Csv-tiedostossa ohjelmalla on yksilöllinen attribuutti 'ATKNO'.
Ohjelmasta voi olla usempi rivi, joten tarkistetaan löytyykö
'ATKNO':lla jo ohjelma. Jos ei, luodaan rivistä ohjelma ja lisätään ohjelmat-arrayhin.
"""
def csv_to_json(csvFile, jsonFile):
    # Array, johon on listattu läpikäydyt ohjelmat
    atknoarray = []
    # Array, johon ohjelmat lisätään
    ohjelmat = []
    # String, joka kirjoitetaan json-tiedostoon
    jsonString = ''
      
    with open(csvFile, encoding='utf8') as csvf: 
        # Luetaan csv-tiedosto
        csvReader = csv.DictReader(csvf) 

        # Muutetaan jokainen csv-rivi dictionaryksi
        for row in csvReader:
            if not row['ATKNO'] in atknoarray:
                # Otetaan talteen rivin 'ATKNO', jotta samasta ohjelmasta ei tule duplikaatteja.
                atknoarray.append(row['ATKNO'])

                # Valitaan halutut ohjelmatiedot
                ohjelma = {}
                # Näissä tiedostoissa on vain radio-ohjelmia, joten se voidaan kovakoodata ohjelman tyypiksi.
                ohjelma['TYPE'] = 'radio'
                ohjelma['MAINTITLE'] = row['OTSIKKO1']
                ohjelma['YLE_ID'] = row['ATKNO']
                ohjelma['DESC'] = row['SISALTOTIETO']
                # Lisätään ohjelma ohjelmat-arrayhin.
                ohjelmat.append(ohjelma)
            
    # Muutetaan ohjelmat-array JSON stringiksi ja kirjoitetaan tiedostoon
    with open(jsonFile, 'w', encoding='utf8') as jsonf: 
        jsonString = json.dumps(ohjelmat, indent=4, ensure_ascii=False)
        jsonf.write(jsonString)


csv_to_json(csvFile, jsonFile)