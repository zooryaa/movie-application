package com.example.repetitionsprojekt.user;


import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.management.InstanceNotFoundException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;


@Service

public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Users getUser(UUID id) throws InstanceNotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new InstanceNotFoundException("There is no User with this id"));

    }

    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    public Users createUser(Users user) {
        return userRepository.save(user);
    }

    public Users updateUser(UUID userId, Users newUser) {
        return userRepository.findById(userId).map(
                users -> {
                    users.setUserName(newUser.getUserName());
                    return userRepository.save(users);
                }).orElseGet(() -> {
            newUser.setUserId(userId);
            return userRepository.save(newUser);
        });
    }

    public void deleteUser(UUID userId) throws InstanceNotFoundException {
        if (!userRepository.existsById(userId)) {
            throw new InstanceNotFoundException("This user does not exist");
        } else {
            userRepository.deleteById(userId);
        }

    }

    @Override
//    This method is used for security authentication, use caution when changing this
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Users user = userRepository.findByUserName(userName);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        } else {
//          Construct a valid set of Authorities (needs to implement Granted Authorities)
            Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole().getName()));
            user.getRole().getAuthorities().forEach(authority ->
                    authorities.add(new SimpleGrantedAuthority(authority.getName())));
//            return a spring internal user object that contains authorities and roles
            return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), authorities);
        }
    }
}