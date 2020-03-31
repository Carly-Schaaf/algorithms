require 'pathname'
require 'byebug'

# The company that you work for is developing a new Unix-like operating system, 
# and your job is to collect statistics for the new file explorer. You've decided 
# that it's useful to have statistics about a user's movement from one file to another 
# in the explorer. To move from one file to another, a user can either move to the parent 
# directory of the current directory (similar to cd .. command) or move to one of the 
# subdirectories of the current directory (similar to cd <subdirectory> command). 
# Each move to a parent directory or to a subdirectory is recorded as 1 move.

# All the directories and files that users can see are located under the /root/devops/directory. 
# There is also a /root/devops/files.in file where all pairs of files (from, to), such that a user 
# moved from the folder containing the from file to the folder containing the to file, are stored. 
# Each pair is represented as one line containing exactly two filenames that are separated by a single 
# whitespace. Filenames are given only by their names, even if they are not stored in the root directory.

# It is guaranteed that filenames in the operating system are pairwise distinct, and that all 
# folder and file names in the operating system contain only lowercase English letters, digits, 
# and the symbols _ and -. It is also guaranteed that there are no more than 1000 files and folders
# in total in the operating system. It is also guaranteed that /root/devops/files.in contains no more 
# than 1000 lines.

# Given this information, you need to calculate the minimal number of commands needed to move from 
# the folder containing the from file to the folder containing the to file for each pair of files 
# (from, to) in /root/devops/files.in. If it is not possible to do this because one or both files 
# doesn't exist, the distance is equal to -1. For each pair of files, return a single line that 
# represents the distance between these files.

def get_filepath(file, root = '.')
    children = Dir.children(root)
    return root if children.include?(file)
    children_dirs = Pathname(root).children.select(&:directory?).map(&:basename)
    
    children_dirs.each do |child_dir|
        result = get_filepath(file, File.join(root, child_dir))
        return result if result
    end

    nil
end

def get_distance_btw(file1, file2, memo = {})
    file1_path = memo[file1]
    file2_path = memo[file2]

    file1_path ||= get_filepath(file1)
    file2_path ||= get_filepath(file2)

    memo[file1] = file1_path
    memo[file2] = file2_path

    return -1 unless file1_path && file2_path

    path1_arr = file1_path.split('/')
    path2_arr = file2_path.split('/')

    first_diff_idx = [path1_arr, path2_arr].max.find_index.with_index do |_, i| 
        (path1_arr[i].nil? || path2_arr[i].nil?) || (path1_arr[i] != path2_arr[i])
    end
    
    return 0 if first_diff_idx.nil?
    return (path1_arr.length - first_diff_idx) + (path2_arr.length - first_diff_idx)
end

def print_distances_btw(files)
    file_pairs = File.readlines(files).map(&:chomp)
    
    file_pairs.each do |pair|
        file1, file2 = pair.split(' ')
        p get_distance_btw(file1, file2)
    end
end

print_distances_btw('files.in')

# file2.rb file_system.rb --> 2
# file3.rb file_system.rb --> -1
# files.in file_system.rb --> 0
# file1.rb file2.rb --> 1