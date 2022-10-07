import psycopg2
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Ouedraogo@6000'
DATABASE = 'Holliwode'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password= PASSWORD, dbname = DATABASE)
cursor = connection.cursor()
query = "INSERT INTO DATABASE (actor_id ,first_name, last_name ,age ,number_oscars) values(32, 'KABRE', 'AZIZ', '23', '99');"
cursor.execute(query)
query = "SELECT * FROM actors LIMIT 20;"
cursor.execute(query)
response = cursor.fetchall()
print(response)

