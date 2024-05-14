var should_display_form = true;
var num_teams = 4;
const max_teams = 64;
var teams_list_element = display_teams();

function display_bracket() {
    console.log("bracket");
}

function display_form() {
    var formDiv = document.getElementById("bracket");
    var team_num_entry_form = document.createElement("form");

    var num_teams_label = document.createElement("label");
    num_teams_label.textContent = "Enter the number of teams in the tournament:";

    var lineBreak1 = document.createElement("br");
    var lineBreak2 = document.createElement("br");

    var num_teams_entry = document.createElement("input");
    num_teams_entry.type = 'text';
    num_teams_entry.name = 'numTeams';

    var submit_button = document.createElement("input");
    submit_button.type = 'submit';
    submit_button.value = 'Submit';

    team_num_entry_form.appendChild(num_teams_label);
    team_num_entry_form.appendChild(lineBreak1);
    team_num_entry_form.appendChild(num_teams_entry);
    team_num_entry_form.appendChild(lineBreak2);
    team_num_entry_form.appendChild(submit_button);


    team_num_entry_form.addEventListener('submit', function(event) {
        event.preventDefault();
        num_teams = Math.min(num_teams_entry.value, max_teams);
        formDiv.removeChild(teams_list_element);
        teams_list_element = display_teams();
        formDiv.appendChild(teams_list_element);
    });

    

    formDiv.appendChild(team_num_entry_form);
    formDiv.appendChild(teams_list_element);
}

function display_teams() {
    var teams_entry_form = document.createElement("form");

    var all_teams_label = document.createElement("label");
    all_teams_label.textContent = "Please enter team names below:";

    var teams_list = document.createElement("ul");

    for (let i = 0; i < num_teams; i++) {
        console.log(i);
        var list_item = document.createElement("li");
        var list_div = document.createElement("div");

        var team_label = document.createElement("label");
        team_label.textContent = i+1 + " Seed:";
        

        var team_input = document.createElement("input");
        team_input.type = 'text';
        team_input.name = 'teamName'+i;

        list_div.appendChild(team_label);
        list_div.appendChild(team_input);

        list_item.appendChild(list_div);

        teams_list.appendChild(list_item);
    }

    teams_entry_form.appendChild(all_teams_label);
    teams_entry_form.appendChild(teams_list);

    return teams_entry_form;
}

if (should_display_form) {
    display_form();
} else {
    display_bracket();
}