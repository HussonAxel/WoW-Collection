# API 

## Profile API 

### Account Profile API 

- **GET** `/profile/user/wow` - Returns a profile summary for an account.
1. Profile ID 
2. WoW Accounts with : 
    1. ID
    2. Existing characters with :
        1. Character with `https://eu.api.blizzard.com/profile/wow/character/archimonde/nephelia?namespace=profile-eu`
        2. Protected character with `https://eu.api.blizzard.com/profile/user/wow/protected-character/{UUID}?namespace=profile-eu`
        3. Realm 
        4. Class 
        5. Race 
        6. Gender
        7. Faction
        8. Level



- **GET** `/profile/user/wow/protected-character/{realmId}-{characterId}` - Returns a protected profile summary for a character.
1. ID - Name - Money - Realm - 
2. Protected Stats : 
    1. Total Number Deaths
    2. Tolta Gold Gained
    3. Total Gold Lost
    4. Total Item Value Gained
    5. Level Number Death
    6. Level Gold Gained
    7. Level Gold Lost
    8. Level Item value gained
3. Position : 
    1. Zone 
    2. Map
    3. Coordinates
4. Bind Position :
    1. Zone 
    2. Map
    3. Coordinates


- **GET** `/profile/user/wow/collections` - Returns an index of collection types for an account.
1. Pets
2. Mounts
3. Toys
4. Heirlooms
5. Transmogs

### Character Achievements API 