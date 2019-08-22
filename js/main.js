function dataRacer(){
    let year = $("#racer-form input[name=year").val()
    let laps = $("#racer-form input[name=laps").val()


$.get('https://ergast.com/api/f1/' + year +'/' + laps + '/driverStandings.json', function (data) {
      console.log(data)
      let position = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
      let name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
      let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality
      let sponsor = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name
      let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points

      console.log(data)
      let position1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position
      let name1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName
      let nationality1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality
      let sponsor1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name
      let points1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points

      console.log(data)
      let position2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position
      let name2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName
      let nationality2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality
      let sponsor2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name
      let points2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points

      console.log(data)
      let position3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position
      let name3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName
      let nationality3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality
      let sponsor3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name
      let points3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points

      console.log(data)
      let position4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position
      let name4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName
      let nationality4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality
      let sponsor4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name
      let points4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points

      console.log(data)
      let position5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position
      let name5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName
      let nationality5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality
      let sponsor5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name
      let points5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points

      console.log(data)
      let position6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position
      let name6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName
      let nationality6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality
      let sponsor6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name
      let points6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points

     
      



    $("#RacerPosition").text(position)
    $("#RacerName").text(name)
    $("#RacerNationality").text(nationality)
    $("#RacerSponsor").text(sponsor)
    $("#RacerPoints").text(points)

    $("#RacerPosition1").text(position1)
    $("#RacerName1").text(name1)
    $("#RacerNationality1").text(nationality1)
    $("#RacerSponsor1").text(sponsor1)
    $("#RacerPoints1").text(points1)

    $("#RacerPosition2").text(position2)
    $("#RacerName2").text(name2)
    $("#RacerNationality2").text(nationality2)
    $("#RacerSponsor2").text(sponsor2)
    $("#RacerPoints2").text(points2)

    $("#RacerPosition3").text(position3)
    $("#RacerName3").text(name3)
    $("#RacerNationality3").text(nationality3)
    $("#RacerSponsor3").text(sponsor3)
    $("#RacerPoints3").text(points3)

    $("#RacerPosition4").text(position4)
    $("#RacerName4").text(name4)
    $("#RacerNationality4").text(nationality4)
    $("#RacerSponsor4").text(sponsor4)
    $("#RacerPoints4").text(points4)

    $("#RacerPosition5").text(position5)
    $("#RacerName5").text(name5)
    $("#RacerNationality5").text(nationality5)
    $("#RacerSponsor5").text(sponsor5)
    $("#RacerPoints5").text(points5)

    $("#RacerPosition6").text(position6)
    $("#RacerName6").text(name6)
    $("#RacerNationality6").text(nationality6)
    $("#RacerSponsor6").text(sponsor)
    $("#RacerPoints6").text(points6)



})
}
