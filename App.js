import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Switch, Button, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [editGroupSettings, setEditGroupSettings] = useState(false);
  const [inviteOthers, setInviteOthers] = useState(false);
  const [shareCost, setShareCost] = useState(false);
  const [adminBearsCost, setAdminBearsCost] = useState(false);
  const [approveNewContacts, setApproveNewContacts] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>New Group</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={pickImage}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.profilePlaceholder}>
                <Text style={styles.profilePlaceholderText}>+</Text>
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.profileInfo}>
            <TextInput
              placeholder="Group Name"
              value={groupName}
              onChangeText={setGroupName}
              style={styles.input}
            />
            <TextInput
              placeholder="Group Description"
              value={groupDescription}
              onChangeText={setGroupDescription}
              style={styles.input}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contacts: 6 of xxx (number of contacts)</Text>
        <View style={styles.avatarContainer}>
          {['ARmoz', 'Alma', 'AAerah', 'JessB', 'DataDyn', 'Grizzly'].map((contact, index) => (
            <TouchableOpacity key={index} style={styles.avatarWrapper}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{contact.charAt(0)}</Text>
              </View>
              <Text style={styles.avatarName}>{contact}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Add more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Admins:</Text>
        <View style={styles.avatarContainer}>
          {['ARmoz', 'Alma'].map((admin, index) => (
            <TouchableOpacity key={index} style={styles.avatarWrapper}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{admin.charAt(0)}</Text>
              </View>
              <Text style={styles.avatarName}>{admin}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Add more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Group Permission</Text>
        <View style={styles.switchContainer}>
          <Text>Edit group settings</Text>
          <Switch value={editGroupSettings} onValueChange={setEditGroupSettings} />
        </View>
        <View style={styles.switchContainer}>
          <Text>Invite other contacts</Text>
          <Switch value={inviteOthers} onValueChange={setInviteOthers} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storage Cost Sharing</Text>
        <View style={styles.switchContainer}>
          <Text>Share Cost Equally Among Contacts</Text>
          <Switch value={shareCost} onValueChange={setShareCost} />
        </View>
        <View style={styles.switchContainer}>
          <Text>Admin Bears Full Cost</Text>
          <Switch value={adminBearsCost} onValueChange={setAdminBearsCost} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Admin Permission</Text>
        <View style={styles.switchContainer}>
          <Text>Approve new contacts</Text>
          <Switch value={approveNewContacts} onValueChange={setApproveNewContacts} />
        </View>
      </View>

      <Button title="Create" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    marginTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePlaceholderText: {
    fontSize: 24,
    color: '#fff',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  avatarWrapper: {
    marginRight: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
  },
  avatarName: {
    marginTop: 5,
    fontSize: 12,
  },
  smallButton: {
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  smallButtonText: {
    fontSize: 12,
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
