def game_of_life(board)
    result = board.dup

    board.each_with_index do |row, x|
        row.each_with_index do |col, y|
            neighbors = find_live_neighbors([x, y], board)

            if board[x][y] == "1"
                if neighbors.length < 2
                    result[x][y] = "0"
                elsif neighbors.length > 3
                    result[x][y] = "0"
                end
            elsif neighbors == 3
                result[x][y] = "1"
            end
        end
    end
    result
end


def find_live_neighbors(pos, board)
    directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [1, -1],
        [1, -1],
        [-1, 0],
        [-1, -1],
        [-1, 1]
    ]

    neighbors = []

    neighbors.each do |dx, dy|
        new_pos = [pos[0] + dx, pos[1] + dy]

        next unless (new_pos[0] >= 0 && new_pos[0] < board.length)
        next unless (new_pos[1] >= 0 && new_pos[1] < board[0].length)
        next unless board[new_pos[0]][new_pos[1]] == "1"

        neighbors << new_pos
    end
    neighbors
end