from xml.dom import minidom
import xml.etree.ElementTree as ET
import json

"""
Tämä skripti lukee annetun xml-tiedoston, hakee siitä halutut ohjelmatiedot ja kirjoittaa ne json-tiedostoon.
Tiedostojen tulee olla samassa kansiossa.
"""


# Xml-tiedosto, jota luetaan
xmlFilePath = r'Pakanamaan_kartta.axf'
# Json-tiedosto, johon kirjoitetaan
jsonFilePath = r'xml_json.json'

class Ohjelma:
    TYPE: ''
    MAINTITLE: ''
    EPISODE_NUMBER: ''
    DURATION: ''
    LANGUAGE: ''
    YLE_ID: ''
    DESC: ''
    ACTORS: ''
    GENRE: ''
    YEAR: ''



def xmlToJson(xmlFilePath):
    # Avataan xml-tiedosto
    tree = ET.parse(xmlFilePath)
    root = tree.getroot()
    # Luodaan ohjelma-olio
    testi = Ohjelma()
    # Näissä tiedostoissa on vain tv-ohjelmia, joten se voidaan kovakoodata ohjelman tyypiksi.
    testi.TYPE = 'tv'
    # Käydään läpi xml-elementit ja asetetaan halutut attribuutit ohjelma-olion tiedoiksi.
    for child in root.findall('MAObject'):
        list = child.findall('Meta')
        for s in list:
            tag = s.get('name')
            if tag == 'MAINTITLE':
                testi.MAINTITLE = s.text
            if tag == 'EPISODE_NUMBER':
                testi.EPISODE_NUMBER = s.text
            if tag == 'DURATION':
                testi.DURATION = s.text
            if tag == 'LANGUAGE':
                testi.LANGUAGE = s.text
            if tag == 'YLE_ID':
                testi.YLE_ID = s.text
            if tag == 'DESCRIPTION_SHORT':
                testi.DESC = s.text
            if tag == 'ACTORS':
                testi.ACTORS = s.text
            if tag == 'CLASSIFICATION_MAIN_CLASS':
                testi.GENRE = s.text
            if tag == 'PRODUCTION_YEAR':
                testi.YEAR = s.text

    # Muutetaan ohjelma-olio JSON stringiksi ja kirjoitetaan tiedostoon
    jsonStr = json.dumps(testi.__dict__)
    with open(jsonFilePath, 'w', encoding='utf8') as jsonf: 
        jsonf.write(jsonStr)


xmlToJson(xmlFilePath)
