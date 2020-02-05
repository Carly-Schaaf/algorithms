require 'byebug'
# Prompt

# 1. Employees are displayed with title, first initial, and last name.
# 2. Employees are listed beneath their manager, sorted alphabetically by last name.
# 3. Each Employee is indented by one dash more than their manager.
  
input = [
    { "name": "Celena Ridge", "id": 4, "title": "V.P. People", "manager_id": 1 },
    { "name": "Jessie Rexford", "id": 7, "title": "Engineering Lead", "manager_id": 2 },
    { "name": "Katy Eubank", "id": 2, "title": "CTO", "manager_id": 1 },
    { "name": "Marita Beirne", "id": 1, "title": "CEO" },
    { "name": "Sheba Buchta", "id": 8, "title": "Engineering Lead", "manager_id": 2 }
    ]

def make_dict(input)
    result = Hash.new {|h, k| h[k] = []}
    input.each do |empl|
        m_id = empl[:manager_id]
        first_initial = empl[:name].split(" ")[0][0]
        last_name = empl[:name].split(" ")[1]

        empl[:first_initial] = first_initial
        empl[:last_name] = last_name

        if m_id.nil?
            result["root"] << empl
        else
            result[m_id] << empl
        end
    end
    result
end

def dfs(hash, root = hash["root"][0], hyphen = "-")

    puts "#{hyphen} #{root[:title]}, #{root[:first_initial]}, #{root[:last_name]}"
    children = hash[root[:id]]

    children.sort_by! {|child| child[:last_name]}
    hyphen = hyphen + "-"

    children.each do |child|
        dfs(hash, child, hyphen)
    end
end

dict = make_dict(input)
dfs(dict)