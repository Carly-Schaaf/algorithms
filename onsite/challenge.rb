require 'byebug'

def avg_margin_of_victory
    file = File.open('sports.txt').readlines.map(&:chomp)

    victories = Hash.new {|h, k| h[k] = []}

    file.each do |game|
        game = game.split(" ")
        team_1_score = game[1].to_i
        team_2_score = game[3].to_i
        
        if team_1_score > team_2_score
            winning_team = game[0]
            victories[winning_team] << team_1_score - team_2_score
        elsif team_2_score > team_1_score
            winning_team = game[2]
            victories[winning_team]<< team_2_score - team_1_score
        end
    end
    max_avg = victories.max_by {|k, v| (v.sum.to_f) / (v.length)}

    return max_avg[0]
end

p avg_margin_of_victory

def better_than_and_dominates
    file = File.open('sports.txt').readlines.map(&:chomp)

    better_than = Hash.new {|h, k| h[k] = []}
    dominates = Hash.new {|h, k| h[k] = []}

    file.each do |game|
        game = game.split(" ")
        team_1_score = game[1].to_i
        team_2_score = game[3].to_i
        
        if team_1_score > team_2_score
            winning_team = game[0]
            losing_team = game[2]
        elsif team_2_score > team_1_score
            winning_team = game[2]
            losing_team = game[0]
        end
        better_than[winning_team] << losing_team unless better_than[winning_team].include?(losing_team)
    end
    
    # better_than.keys.each do |team_a|
    #     beaten_teams = better_than[team_a]

    #     beaten_teams.each do |team_b|
    #         better_than[team_b].each do |team_c|
    #             if !better_than[team_a].include?(team_c)
    #                 better_than[team_a] << team_c unless team_c == team_a
    #             end
    #         end
    #     end
    # end

    better_than.keys.each do |team_a|
        beaten_teams = better_than[team_a]
        q = [] + beaten_teams
        until q.empty?
            current_team = q.shift
            other_teams = better_than[current_team]
            other_teams.each do |team_b|
                q << team_b unless beaten_teams.include?(team_b)
                better_than[team_a] << team_b unless beaten_teams.include?(team_b)
            end
        end
    end

    better_than.keys.each do |team|
        teams_beaten = better_than[team]

        teams_beaten.each do |beaten_team|
            other_beaten_teams = better_than[beaten_team]
            dominates[team] << beaten_team unless other_beaten_teams.include?(team)
        end
    end
    
    sorted_result = dominates.sort
    sorted_result.map! do |game|
        sorted = [game[0], game[1].sort]
    end
end

p better_than_and_dominates

def better_than_improved
    better_than.keys.each do |team_a|
        beaten_teams = better_than[team_a]
        q = beaten_teams
        until q.empty?
            current_team = q.shift
            other_teams = better_than[current_team]
            other_teams.each do |team_b|
                q << team_b unless beaten_teams.include?(team_b)
            end
        end
    end
end