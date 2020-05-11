def say_hello
    puts 'Hello, World'
  end
  
  5.times { say_hello }
  
  
  # 
  # Your previous Plain Text content is preserved below:
  # 
  # # /*
  # # 1. Write a function that flattens an arbitrarily nested array. Assume the array contains either numbers or further nested arrays. For example: flatten([1, [2, [3, 4]]]) -> [1, 2, 3, 4]
  
  def flatten(array)
      result = []
      array.each do |el|
          if el.is_a?(Array)
              result += flatten(el)
          else
              result << el
          end
      end
  
      result
  end
  # # 
  # 
  # # 2. Suppose we are building a simple social network. There are users, and users can be friends with other users. Design a schema for this setup.
  
  # See full schema below 
  
  # # 
  # # 3. Suppose we want to support statuses - i.e. users can post statuses, and all the friends of a user can view that user's statuses. How would you add to your schema to support this?
  
  # See full schema below 
  
  # # 
  # # 4. What would the query look like to fetch a user's timeline - i.e. the posts their friends have made, with most recent posts coming first?
  
  # KEY: ? = user_id of the user whose timeline I'm fetching, this is assuming our statuses table is a posts table
  
  SELECT status 
  FROM statuses 
  WHERE statuses.user_id IN (
    SELECT friender_id, friendee_id
    FROM friends
    WHERE friender_id = ? OR friendee_id = ?
    AND request_approved = true
  ) AND statuses.user_id != ?
  SORT BY statuses.date DESC
  
  # # 
  # # 5. Suppose we want to support friend requests. I.e. to be friends with someone (and view their statuses), you must first request permission, and they must approve you. How would you modify your schema and the query to support this?
  # #  */
  # 
  
  # Here is the full schema to account for questions 2,3,5:
    
  # `users`
  column name     | data type | details
  ----------------|-----------|------------
  `id `           | integer   |
  `username  `    | string    | 
  
  # `friends`
  column name        | data type | details
  ----------------   |-----------|------------
  `friender_id `     | integer   | references users table
  `friendee_id `     | integer   | references users table
  `request_approved` | enum      | options are: ["pending", true, false]
  
  
  # `statuses`
  column name     | data type | details
  ----------------|-----------|------------
  `user_id `      | integer   | references users table
  `status `       | string    | 
  `date `         | datetime  | 