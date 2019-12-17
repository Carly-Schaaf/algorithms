# require 'byebug'

def game_of_life(board)
    board_copy = board.map do |row|
        row + []
    end

    board_copy.each_with_index do |row, x|
        row.each_with_index do |col, y|
            neighbors = find_live_neighbors([x, y], board_copy)
            if board_copy[x][y] == 1
                if neighbors.length < 2
                    board[x][y] = 0
                elsif neighbors.length > 3
                    board[x][y] = 0
                end
            elsif neighbors.length == 3
                board[x][y] = 1
            end
        end
    end

    board
end


def find_live_neighbors(pos, board_copy)
    directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [1, -1],
        [1, 1],
        [-1, 0],
        [-1, -1],
        [-1, 1]
    ]

    neighbors = []

    directions.each do |dx, dy|
        new_pos = [pos[0] + dx, pos[1] + dy]

        next unless (new_pos[0] >= 0 && new_pos[0] < board_copy.length)
        next unless (new_pos[1] >= 0 && new_pos[1] < board_copy[0].length)
        next unless board_copy[new_pos[0]][new_pos[1]] == 1

        neighbors << new_pos
    end
    neighbors
end

p game_of_life([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])